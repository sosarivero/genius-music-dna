import { getSongById } from '../services/geniusService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SongCard.css';
import YoutubeEmbed from './YoutubeEmbed';

function SongCard() {
  const [song, setSong] = useState(null);
  const { songId } = useParams();

  async function handleSong() {
    try {
      const result = await getSongById(songId);
      setSong(await result);
    } catch (error) {
      console.error('Error fetching song:', error);
    }
  }

  useEffect(() => {
    handleSong();
  }, [songId]);

  return (
    <>
      <div className="song-card">
        {song && (
          <>
          {console.log(song)}
            <img src={song.header_image_url} alt="" />
            <div className="info">
              <h1 className="songtitle">{song.title}</h1>
              <h2 className="songartist">{song.artist_names}</h2>
              <a className="released">Released in {song.release_date_for_display}</a>
              <br />
              <b className="producer">Producers:</b>
              {song.producer_artists.map((obj) => (
                <li key={obj.name}>{obj.name}</li>
              ))}
            </div>
            {console.log(song.media[1].url)}
            {song.media[1].url.includes('youtube') && (<YoutubeEmbed youtubeLink={song.media[1].url}></YoutubeEmbed>)}
          </>
        )}
      </div>
      {song && (
        <div>
          {console.log(song.media[1].url)}
          {song.song_relationships[0].songs.map((obj) => (
            <div key={obj.id} className="song-card reversed">
              <img className="sampleImg" src={obj.header_image_url} alt="" />
              <div className="info">
                <h1>{obj.title}</h1>
                <h2>{obj.artist_names}</h2>
                {console.log(obj)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SongCard;

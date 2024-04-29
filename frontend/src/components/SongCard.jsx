import { getSongById } from '../services/geniusService';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SongCard.css';
import YoutubeEmbed from './YoutubeEmbed';
import FavouriteButton from './FavouriteButton';

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
            <img className="songImg" src={song.header_image_url} alt="" />
            <div className="info">
              <FavouriteButton song={song} />

              <h1> {song.title}</h1>
              <h2>{song.artist_names}</h2>
              <a>Released in {song.release_date_for_display}</a>
              <br />
              <b>Producers:</b>
              {song.producer_artists.map((obj) => (
                <li key={obj.name}>{obj.name}</li>
              ))}
            </div>
            {/* Renders Youtube embeds if 'youtube' is listed as one of the media providers */}
            {song.media.map((item, index) => {
              if (item.provider === 'youtube') {
                return <YoutubeEmbed youtubeLink={item.url} />;
              }
            })}
          </>
        )}
      </div>
      {song && (
        <div>
          {song.song_relationships[0].songs.map((obj) => (
            <div className="song-card reversed">
              <Link to={obj.api_path}>
                <img className="sampleImg" src={obj.header_image_url} alt="" />
              </Link>
              <div className="info">
                <h1>{obj.title}</h1>
                <h2>{obj.artist_names}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SongCard;

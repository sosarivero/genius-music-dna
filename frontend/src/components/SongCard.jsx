import { getSongById } from '../services/geniusService';
import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SongCard.css';
import YoutubeEmbed from './YoutubeEmbed';
import FavouriteButton from './FavouriteButton';
import MediaIcons from './MediaIcons';
import { UserContext } from '../layouts/mainLayout';
import { CircularProgress } from '@mui/material';

function SongCard() {
  const { user } = useContext(UserContext);
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
        {!song && <CircularProgress className="progress" size={'450px'} thickness={0} />}
        {song && (
          <>
            {console.log(song)}
            <img className="songImg" src={song.header_image_url} alt="" />
            <div className="info">
              {user && <FavouriteButton song={song} />}

              <h1> {song.title}</h1>
              <h2>{song.artist_names}</h2>
              <a>Released in {song.release_date_for_display}</a>
              <br />
              <b>Producers:</b>
              {song.producer_artists.map((obj) => (
                <li key={obj.name}>{obj.name}</li>
              ))}
              <MediaIcons media={song.media} />
            </div>
            {/* Renders Youtube embeds if 'youtube' is listed as one of the media providers */}
            {song.media.map((item, index) => {
              if (item.provider === 'youtube') {
                return <YoutubeEmbed key={index} youtubeLink={item.url} />;
              }
            })}
          </>
        )}
      </div>
      {song && (
        <div>
          {song.song_relationships[0].songs.map((obj) => (
            <div className="song-card reversed" key={obj.id}>
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

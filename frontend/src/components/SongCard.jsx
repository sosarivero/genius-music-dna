import { getSongById } from '../services/geniusService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {song && (
        <>
          <h1>{song.full_title}</h1>
          <img src={song.header_image_url} alt="" />
        </>
      )}
    </div>
  );
}

export default SongCard;

import { getSongById } from '../services/geniusService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SongCard() {
  const [song, setSong] = useState(null);
  const { songId } = useParams();

  async function handleSong() {
    const result = await getSongById();
    setSong(await result.song);
    console.log(song);
  }

  useEffect(() => {
    handleSong();
  }, []);

  return (
    <div>
      <h1>{song.full_title}</h1>
    </div>
  );
}

export default SongCard;

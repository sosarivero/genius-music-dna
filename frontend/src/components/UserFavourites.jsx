import './UserFavourites.css';
import { useParams } from 'react-router-dom';
import { getAllFavourites } from '../services/userService';
import { useState, useEffect } from 'react';

function UserFavourites() {
  const { userId } = useParams();
  const [favouriteSongs, setFavouriteSongs] = useState(null);

  async function handleFavourites() {
    try {
      const { data } = await getAllFavourites(userId);
      console.log(await data);
      setFavouriteSongs(await data);
    } catch (error) {
      console.error('Error fetching favourite songs:', error);
    }
  }

  useEffect(() => {
    handleFavourites();
  }, [userId]);

  return (
    <>
      {favouriteSongs && (
        <ul>
          {favouriteSongs.map((song) => {
            return (
              <div>
                <ul>
                  <li>{song.title}</li>
                  <li>by {song.artist_names}</li>
                </ul>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default UserFavourites;

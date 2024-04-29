import './UserFavourites.css';
import { useParams, Link } from 'react-router-dom';
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
        <div className="favList">
          {favouriteSongs.map((song) => {
            return (
              <Link to={`../songs/${song.id}`} key={song.id}>
                <div className="favSong">
                  <img src={song.image} alt="" />
                  <ul>
                    <li>{song.title}</li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserFavourites;

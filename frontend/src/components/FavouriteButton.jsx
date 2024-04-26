import './FavouriteButton.css';
import { UserContext } from '../layouts/mainLayout';
import { useContext, useState, useEffect } from 'react';
import { saveSong } from '../services/songService';
import { addSongToFavourites, getUserSongRelationship } from '../services/userService';

function FavouriteButton({ song }) {
  const { user } = useContext(UserContext);
  const [alreadySaved, setAlreadySaved] = useState(false);

  useEffect(() => {
    async function checkFavourite() {
      let isSaved = await getUserSongRelationship(user.id, song.id);

      setAlreadySaved(isSaved);
    }

    checkFavourite();
  }, []);

  async function handleFavouriteAdd() {
    try {
      const saveResponse = await saveSong(song);
      const addFavResponse = await addSongToFavourites(user.id, song.id);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <button className={alreadySaved ? 'saved' : 'not-saved'} type="button" onClick={handleFavouriteAdd}>
      <img src="https://www.freeiconspng.com/thumbs/like-icon-png/like-outline-icon-png-22.png" />
    </button>
  );
}

export default FavouriteButton;

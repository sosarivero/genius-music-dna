import './FavouriteButton.css';
import { UserContext } from '../layouts/mainLayout';
import { useContext } from 'react';
import { saveSong } from '../services/songService';
import { addSongToFavourites } from '../services/userService';

function FavouriteButton({ song }) {
  const { user } = useContext(UserContext);
  console.log(user.id, song.id);
  async function handleFavouriteAdd() {
    try {
      const saveResponse = await saveSong(song);
      const addFavResponse = await addSongToFavourites(user.id, song.id);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <button type="button" onClick={handleFavouriteAdd}>
      Añador a favoritos
    </button>
  );
}

export default FavouriteButton;

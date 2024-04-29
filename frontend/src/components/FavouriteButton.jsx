import './FavouriteButton.css';
import { UserContext } from '../layouts/mainLayout';
import { useContext, useState, useEffect } from 'react';
import { saveSong } from '../services/songService';
import { addSongToFavourites, removeSongFromFavourites, getUserSongRelationship } from '../services/userService';

function FavouriteButton({ song }) {
  const { user } = useContext(UserContext);
  const [alreadySaved, setAlreadySaved] = useState(false);

  async function checkFavourite() {
    try {
      let isSaved = await getUserSongRelationship(user.id, song.id);
      setAlreadySaved(await isSaved.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    checkFavourite();
  }, []);

  async function handleFavouriteAdd() {
    try {
      await saveSong(song);
      await addSongToFavourites(user.id, song.id);
      setAlreadySaved(!alreadySaved);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleFavouriteRemove() {
    try {
      await removeSongFromFavourites(user.id, song.id);
      setAlreadySaved(!alreadySaved);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <span
      className={'heart ' + (alreadySaved ? 'saved' : 'not-saved')}
      // type="button"
      onClick={alreadySaved ? handleFavouriteRemove : handleFavouriteAdd}
      // style={alreadySaved ? { border: '5px red solid' } : { border: '5px blue solid' }}
    >
      {/* <img
        className="heartImage"
        src="https://www.freeiconspng.com/thumbs/like-icon-png/like-outline-icon-png-22.png"
      /> */}
    </span>
  );
}

export default FavouriteButton;

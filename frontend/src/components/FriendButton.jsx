import './FriendButton.css';
import { UserContext } from '../layouts/mainLayout';
import { useContext, useState, useEffect } from 'react';
import { addFriend, removeFriend, areFriends } from '../services/userService';
import { useParams } from 'react-router-dom';

function FriendButton() {
  const { user } = useContext(UserContext);
  const { userId: friendId } = useParams();

  const [alreadyFriends, setAlreadyFriends] = useState(false);

  async function checkFriends() {
    try {
      let response = await areFriends(user.id, friendId);
      setAlreadyFriends(await response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    checkFriends();
  }, []);

  async function handleFriendAdd() {
    try {
      await addFriend(user.id, friendId);
      setAlreadyFriends(!alreadyFriends);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleFriendRemove() {
    try {
      await removeFriend(user.id, friendId);
      setAlreadyFriends(!alreadyFriends);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <span
      className={'heart ' + (alreadyFriends ? 'saved' : 'not-saved')}
      // type="button"
      onClick={alreadyFriends ? handleFriendRemove : handleFriendAdd}
      // style={alreadySaved ? { border: '5px red solid' } : { border: '5px blue solid' }}
    >
      {/* <img
        className="heartImage"
        src="https://www.freeiconspng.com/thumbs/like-icon-png/like-outline-icon-png-22.png"
      /> */}
    </span>
  );
}

export default FriendButton;

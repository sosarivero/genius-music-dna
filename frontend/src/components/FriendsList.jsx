import { getFriends } from '../services/userService';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './FriendsList.css';

function FriendsList() {
  const { userId } = useParams();
  const [friends, setFriends] = useState(null);

  async function handleFriends() {
    try {
      const { data } = await getFriends(userId);
      setFriends(await data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  }

  useEffect(() => {
    handleFriends();
  }, [userId]);

  return (
    <div className="friend-list">
      {friends &&
        friends.map((friend) => (
          <Link to={`../user/${friend.id}`}>
            <div className="friend">
              <img className="small-avatar" src="../../public/dalonso.jpg"></img>
              <span className="friend-name">{friend.first_name}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default FriendsList;

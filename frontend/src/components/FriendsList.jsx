import { getFriends } from '../services/userService';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <>
      {friends &&
        friends.map((friend) => (
          <Link to={`../user/${friend.id}`}>
            <div>
              {friend.first_name} {friend.last_name}
            </div>
          </Link>
        ))}
    </>
  );
}

export default FriendsList;

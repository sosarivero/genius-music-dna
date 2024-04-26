import React, { useState, useEffect } from 'react';
import './User.css';
import { useParams } from 'react-router-dom';
import { getUser } from '../services/userService';

const User = () => {
  const { userId } = useParams();
  const [userToRender, setUserToRender] = useState(null);

  async function handleUser() {
    try {
      const result = await getUser(userId);
      setUserToRender(await result);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  useEffect(() => {
    handleUser();
  }, [userId]);

  return (
    <>
      {userToRender && (
        <>
          <hr className='hr'></hr>
          <section className="user_section">
            <div className="box">
              <img
                className="userImg"
                src="https://s.libertaddigital.com/fotos/noticias/250/250/dalonso220608.jpg"
              ></img>
              <h1 className="userName">{`${userToRender.first_name} ${userToRender.last_name}`}</h1>
            </div>
            <div className="userFav">
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default User;

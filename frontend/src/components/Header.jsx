import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../layouts/mainLayout';
import { useContext } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function logout() {
    localStorage.clear();
    if (localStorage.getItem()) {
      //check something in local storage so you can know
      // if you should reload or not

      window.location.reload();
    }
  }

  return (
    <>
      <div className="divHeader">
        <div className="Header">
          {!user ? (
            <>
              <Link to="/signin">
                <button type="button" className="LogIn">
                  LogIn
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="SignUp">
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            <div className="user-badge">
              <Link to={`../user/${user.id}`}>
                <button className="user">
                  {user.first_name} {user.last_name}
                </button>
              </Link>
              <button className="logout-icon" onClick={() => logout()}>
                <LogoutIcon fontSize={'medium'} />
              </button>
            </div>
          )}
        </div>
        <div className="logo-holder">
          <div className="bg"></div>
          <div className="bar"></div>
          <div className="bar fill1"></div>
          <div className="bar fill3"></div>
          <div className="bar fill4"></div>
          {/*     <img className='RiffRoots' src='https://www.onlygfx.com/wp-content/uploads/2022/03/colorful-sound-wave-equalizer-2.png' />*/}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="NameHeader">RiffRoots</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

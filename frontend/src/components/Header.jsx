import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="divHeader">
        <div className="Header">
          {localStorage.getItem('token') === null ? (
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
            <span>{localStorage.getItem('user')}</span>
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

import './Header.css'

const Header = () => {
  return (
    <>
    <div className='divHeader'>
      <div className='Header'>
        <button type='button' className='LogIn'>LogIn </button>
        <button type='button' className='SignUp'>SignUp </button>
      </div>
      <div class="logo-holder">
        <div class="bg"></div>
        <div class="bar"></div>
        <div class="bar fill1"></div>
        <div class="bar fill3"></div>
        <div class="bar fill4"></div>
{/*     <img className='RiffRoots' src='https://www.onlygfx.com/wp-content/uploads/2022/03/colorful-sound-wave-equalizer-2.png' />*/}        
        <h1 className='NameHeader'>RiffRoots</h1>
        </div>
      </div>
    </>
  )
}

export default Header




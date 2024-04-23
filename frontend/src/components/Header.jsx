import './Header.css'

const Header = () => {
  return (
    <>
    <div className='divHeader'>
      <div className='Header'>
        <button type='button' className='LogIn'>LogIn </button>
        <button type='button' className='SignUp'>SignUp </button>
      </div>
        <img className='RiffRoots' src='https://www.onlygfx.com/wp-content/uploads/2022/03/colorful-sound-wave-equalizer-2.png' />
        <h1 className='NameHeader'>RiffRoots</h1>
    </div>
    </>
  )
}

export default Header




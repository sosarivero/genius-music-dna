import './Home.css'

function Home() {
  return <div className='Home'>
  
  <div >
    <img className='Logo' src='../../public/Logo.svg' />
    <h1 className='encabezado'>Unveil Musical Secrets:</h1>
    <h1 className='encabezado2'>Explore the Origins of Your Favorite Songs and Uncover their
Original Samples all in One Place</h1>
  </div>
  <div>
    <input type='text' className='buscador' required></input>
  </div>
  </div> 
}

export default Home;

import picture from "../picture.jpg"

function Header() {
  return (
    <header className="App-header">
        <img src={picture} className="picture" /> 
        <h1 className='title'>Liliana Santos<br/>Junior Software Developer</h1>       
    </header>
  )
}

export default Header
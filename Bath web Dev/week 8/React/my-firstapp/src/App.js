import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(userName){
    return userName.toUpperCase();
  }

  function getGreeting(username) {

    if (username){
      return <h1>Hello {formatName(username)}</h1>
    }else{
      return <h1>Hello Stranger</h1>
    }
  }

  const name = 'James Bailey';
  const userImage = '/css3-png.png'
  const image = <img className="samle-class" src={userImage} alt="logo"></img>
  const element = ( 
  <div>
    <h1>Hello{name}</h1>
    <p>Good to see you</p>
    {image}
  </div>
  );



  return element;



}

export default App;

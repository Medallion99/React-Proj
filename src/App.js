import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainSec from './components/MainSec';
// import Card from './components/Card';
import Contacts from './components/Contacts';
// import Image from './public/images/images.jpg';


function App() {
  return (
    <div>
        <NavBar />
        <MainSec />
        <div className='class-container'>
            <Contacts 
              image='../public/images/images.jpg'
              rating = "5.0"
              country ="Nigeria"
              stack = ".Net"
              name="Journey into Software Engineering"
              price="From $136 / Person"
            />
            <Contacts 
              image='../public/images/images.jpg'
              rating = "5.0"
              country ="Zimbabwe"
              stack = "AI"
              name="Journey into .Net Framework"
              price="From $150 / Person"
            />
            <Contacts
              image='../public/images/images.jpg'
              rating = "5.0"
              country ="UK"
              stack = "Machine Learning"
              name="Journey into computer science"
              price="From $80 / Person"
            />
        </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

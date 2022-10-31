import logo from './logo.svg';
import lofo from "./"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Tinerary
        </p>
        <img src="https://uploads.sitepoint.com/wp-content/uploads/2016/09/1474485180react-game-webgl.png" />

        <div className='botton'>

        <div className='blue'>
          React
        </div>

        <div className='red'>
          Angular

        </div>
       

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noviembre2022
        </a>
      </header>
    </div>
  );
}

export default App;

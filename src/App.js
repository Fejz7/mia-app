import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent bottone="salva"/>
        <ImageComponent url="http://placekitten.com/200/300" textAlt=""/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      </header>
    </div>
  );
}

export default App;

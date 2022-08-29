import logo from './logo.svg';
import './App.css';


/**
 * Using the Pokemon API, create a React app that displays a random pokemon from the show.
 *  1.) The app should display the character's name, front_default official-artwork, and the pokemon type(s).
 *  2.) The app should also display a button that when clicked, will fetch a new random character from the API and display it. 
 *  3.) The app should show a loading status indicator, and display an error message if the API call fails.
 * */ 

// pokeapi: https://https://pokeapi.co/api/v2/pokemon/{id}
// This api returns a single character by id.

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

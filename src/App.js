import logo from './logo.svg';
import zodiac from './zodiac.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <img src={zodiac} className="App-logo" alt="logo" />
        </div>
        
        <h1 className="zodiac-logotype">Zodiac</h1>
      </header>
    </div>
  );
}

export default App;

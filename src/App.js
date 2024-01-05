import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <HomePage/>
    </div>
  );
}

export default App;

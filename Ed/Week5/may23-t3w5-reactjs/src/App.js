// import logo from './logo.svg';
import './App.css';

let someFruit = [
  "mangoes",
  "more mangoes",
  "yeah just mangoes"
]

function App() {
  return (
    <div className="App">
      <h1>The fruit app!</h1>
      <ul>
        {
          someFruit.map((fruit => {
            return <li>{fruit}</li>
          }))
        }
      </ul>
    </div>
  );
}

export default App;

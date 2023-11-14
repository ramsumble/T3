// import logo from './logo.svg';
import FruitList from './FruitList';
import Title from './Title';
import './App.css';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title /> 
      <ul>
        {
          <FruitList />
        }
      </ul>
      <Footer />
    </div>
  );
}

export default App;

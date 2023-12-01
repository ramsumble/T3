import { useLocalStorage } from 'react-use';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';

function App() {
  const [storedMessage, setStoredMessage] = useLocalStorage('message', "");
  const [message, setMessage] = useState("");

  // Component is loaded
  // gap of time
  // Component is rendered
  // gap of time
  // ComponentDidMount -> useEffect(()=>{}, [])
  // gap of time
  // ComponentWillUpdate -> useEffect(()=> {}, [message])



  useEffect(() => {
    setMessage(storedMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Everytime state message changes, we will update storageMessage value
  useEffect(() => {
    setStoredMessage(message);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  return (
    <div className="App">
      {message && <h1>{message}</h1>}
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to='/1'>Page 1</NavLink>
          </li>
          <li>
            <NavLink to='/2'>Page 2</NavLink>
          </li>
        </ul>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useLocalStorage } from 'react-use';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [storeMessage, setStoredMessage] = useLocalStorage('message', "")
  const [message, setMessage] = useState("")

  useEffect(() => {
    setMessage(storeMessage);
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

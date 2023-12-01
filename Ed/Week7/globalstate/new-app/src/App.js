
import './App.css';
import ApiTester from './ApiTester';
import { ConnectionContext, defaultConnectionData } from './context/ConnectionContext';

function App() {
  return (
    <div className="App">
      {/* add Provider and the initial value */}
      <ConnectionContext.Provider value={defaultConnectionData}>
      <ApiTester />
      </ConnectionContext.Provider>
    </div>
  );
}

export default App;

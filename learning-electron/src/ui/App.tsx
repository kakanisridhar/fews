import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nodeVersion, setNodeVersion] = useState('You are running on browser');
  useEffect(() => {
      if(window.electronHandler) {
        setNodeVersion(window.electronHandler.versions.node);
      }
    }, []);
  return (
    <div className="App">
        Hellow world - your first electron app {nodeVersion}
    </div>
  );
}

export default App;

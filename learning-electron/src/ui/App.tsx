import { use, useEffect, useState } from 'react';
import "./App.css";



function App() {
  const  [settings, setSettings] = useState("");

  async function handleClick(event: any): Promise<void> {
    window.electronApi.serviceRequest("get-settings", [])
    .then((s:string) => {
      setSettings(s);
    }).catch(console.error);
  }

  return (
    <div className="App">
      <p>Hellow world - your first electron app</p>
      <button onClick={handleClick}>Get settings</button>
      <p>settings - {settings}</p>
    </div>
  );
}

export default App;

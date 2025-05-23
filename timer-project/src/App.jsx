import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.html'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    // Prevent multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec === 59) {
          setMins((prevMins) => {
            if (prevMins === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMins + 1;
          });
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setHours(0);
    setMins(0);
    setSec(0);
  };

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>
        {formatTime(hours)}:{formatTime(mins)}:{formatTime(sec)}
      </h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import './App.css';







function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTotalSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (value) => String(value).padStart(2, '0');

  const hours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>
        {formatTime(hours)}:{formatTime(mins)}:{formatTime(sec)}
      </h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

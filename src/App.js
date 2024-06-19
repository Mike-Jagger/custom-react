import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for animations

const textList = [
  "SAAS Business",
  "Tech Startup",
  "E-commerce Platform",
  "Digital Agency",
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="text-container">
        <div className="text">{textList[index]}</div>
      </div>
    </div>
  );
};

export default App;
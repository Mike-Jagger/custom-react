import React from 'react';
import './App.scss'; // Import the SCSS file for animations

const App = () => {
  return (
    <div className="container">
      <div className="text-wrapper">
        <span>Enhance The Way You Build Your&nbsp;</span>
        <div className="text-container">
          <h2 className="rotatingText-adjective">SAAS Business</h2>
          <h2 className="rotatingText-adjective">Tech Startup</h2>
          <h2 className="rotatingText-adjective">E-commerce Platform</h2>
          <h2 className="rotatingText-adjective">Digital Agency</h2>
        </div>
      </div>
      <p className="description">
        Welcome to unrCrew, where innovation meets simplicity. We are dedicated
        to providing best solutions for your business
      </p>
    </div>
  );
};

export default App;

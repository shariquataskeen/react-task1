import React, { useState } from 'react';
import './App.css';

function App() {
  const [showQuote, setShowQuote] = useState(false);

  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div className="App">
      <button className="show-button" onClick={toggleQuote}>
        Show Dad's Quote
      </button>
      
      {showQuote && (
        <div className="quote-container">
          <p className="quote-text">
           "Dad, you've always been my hero."
          </p>
        </div>
      )}
      <div className="right-side">
        <h2 className="name">– Shariqua Taskeen</h2>
      </div>
    </div>
  );
}

export default App;

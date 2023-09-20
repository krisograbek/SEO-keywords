import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-keywords', { keyword });
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching keywords:", error);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}  // Add this line
        placeholder="Enter target keyword"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {suggestions.map((suggestion, index) => <li key={index}>{suggestion}</li>)}
      </ul>
    </div>
  );
}

export default App;

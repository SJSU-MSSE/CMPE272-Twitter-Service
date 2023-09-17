import React, { useState } from 'react';
import '../styles/App.css';

function App() {
  const [items, setItems] = useState([]); // State for the list of items
  const [inputValue, setInputValue] = useState(''); // State for the text field

  // Function to handle the change in text field
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the 'Enter' key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setItems(prevItems => [...prevItems, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div>   
      <h1>My List App</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        onKeyPress={handleKeyPress} 
        placeholder="Type and press Enter" 
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
  );
}

export default App;

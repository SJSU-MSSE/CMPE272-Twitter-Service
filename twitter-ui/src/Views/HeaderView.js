import React, { useState } from 'react';
import '../styles/App.css';

/**
 * @Author: Ahmed Zaytoun
 * The function `App` is a React component that renders a list app with a text input field and a list
 * of items.
 * @returns a JSX element, which represents the structure and content of the user interface. The
 * returned JSX element consists of a div containing a heading, an input field, and an unordered list.
 * The input field is bound to the `inputValue` state variable and has event handlers for `onChange`
 * and `onKeyPress` events. The unordered list is populated with list items based on the `
 */
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

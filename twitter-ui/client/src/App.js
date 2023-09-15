import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Components
import Navbar from "./components/Navbar";

function App() {

  const [textInput, setTextInput] = useState('');

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return(
    <Router>
      <Navbar/>
      <div className='max-w-screen-md mx-auto pt-20'> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
  </Router>
  
  );
}

export default App;
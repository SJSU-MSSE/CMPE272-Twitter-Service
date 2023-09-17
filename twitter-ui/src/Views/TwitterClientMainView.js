import React, { useState } from 'react';
import "../App.css"
import { createTweet, deleteTweet } from '../APIs/APIs';
import Navbar from "./Navbar";


/**
 * Author: Ahmed Zaytoun
 * The `TwitterClientMainView` function is a React component that renders a main view for a Twitter
 * client application, allowing users to retrieve, create, and delete tweets.
 * @returns The TwitterClientMainView component is returning a JSX element, which represents the
 * structure and content of the component's UI.
 */
function TwitterClientMainView() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [activeSegment, setActiveSegment] = useState('retrieve'); // State for active segment
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            if (activeSegment === 'create') {
                // Create tweet with body should go here
                try {
                    const result = await createTweet(inputValue)
                    setMessage('Tweet created successfully!');
                    setItems(prevItems => [...prevItems, result.response['id']]);
                    setInputValue('');
                } catch (error) {
                    setMessage(`${error.message}`);
                }
                
            } else if (activeSegment === 'delete') {
                try {
                    const result = await deleteTweet(inputValue)
                    setMessage('Tweet deleted successfully!');
                    setItems(items.filter(a => a !== inputValue.trim()))
                    setInputValue('');
                } catch (error) {
                    setMessage(`${error.message}`);
                }   
            }
        } else {
            setMessage('');
        }
    };

    return (
        <div className="App">
        <Navbar> </Navbar>
        <h1>Twitter Services</h1>
      
        {/* Segment Control */}
        <div className="segment-control">
            <div className={`segment-option ${activeSegment === 'retrieve' ? 'active' : ''}`}
                onClick={() => {
                    setActiveSegment('retrieve'); 
                    setMessage("")}} >
                Tweet IDs Created
            </div>
            <div  className={`segment-option ${activeSegment === 'create' ? 'active' : ''}`}
                onClick={() => {
                    setActiveSegment('create')
                    setMessage("")
                }}>
                Create
            </div>
            <div  className={`segment-option ${activeSegment === 'delete' ? 'active' : ''}`}
                onClick={() => {
                    setActiveSegment('delete');
                    setMessage("")
            }} >
                Delete
            </div>
        </div>
        {message && <p>{message}</p>}
        {activeSegment === 'create' && (
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress} 
                placeholder="Enter a Tweet message to post" />
        )}

        {activeSegment === 'delete' && (
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress} 
                placeholder="Type a Tweet ID to delete" />
        )}
        {/* Content based on Segment */}
        {activeSegment === 'retrieve' && (
            <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )}

        </div>
    );
}

export default TwitterClientMainView;
import React, { useState } from 'react';
import "../App.css"
import { createTweet, deleteTweet } from '../APIs/APIs';

function TwitterClientMainView() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [activeSegment, setActiveSegment] = useState('retrieve'); // State for active segment
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            if (activeSegment === 'create') {
                // Create tweet with body should go here
                let result = await createTweet({  })
                setItems(prevItems => [...prevItems, inputValue.trim()]);
                setInputValue('');
                
            } else if (activeSegment === 'delete') {
                
            }
        }
    };

    return (
        <div className="App">
        <h1>My List App</h1>

        {/* Segment Control */}
        <div className="segment-control">
            <div className={`segment-option ${activeSegment === 'retrieve' ? 'active' : ''}`}
                onClick={() => setActiveSegment('retrieve')} >
                Retrieve
            </div>
            <div  className={`segment-option ${activeSegment === 'create' ? 'active' : ''}`}
                onClick={() => setActiveSegment('create')}>
                Create
            </div>
            <div  className={`segment-option ${activeSegment === 'delete' ? 'active' : ''}`}
                onClick={() => {
                setActiveSegment('delete');
                setItems([]);  // For this example, the 'Delete' segment simply clears all items
            }} >
                Delete
            </div>
        </div>

        {activeSegment === 'create' && (
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress} 
                placeholder="Type and press Enter" />
        )}

        {activeSegment === 'delete' && (
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress} 
                placeholder="Type and press Enter" />
        )}
        {/* Content based on Segment */}
        {activeSegment === 'retrieve' && (
            <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )}

        

        {/* For this example, 'Delete' just clears the list when clicked. 
            You can modify this based on your actual use-case. */}

        </div>
    );
}

export default TwitterClientMainView;
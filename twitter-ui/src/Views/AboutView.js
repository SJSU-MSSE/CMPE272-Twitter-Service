import React from 'react'
import Navbar from './Navbar'

import '../styles/Navbar.css';

/**
 * @Author: Miyar Karthik Kamath
 * The AboutView function returns a React component that displays information about a web application
 * and its team members.
 * @returns The AboutView component is returning a JSX element, which is a div containing the content
 * of the About page.
 */
const AboutView = () => {
  return (
    <div className="App">
        <Navbar> </Navbar>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-1000'>
            <center><b>Welcome to our CMPE272-Twitter-Service</b></center>
        </h1>
        <p>
            <center>This is a simple web application created using React and Python which consumes Twitter API to programmatically create, 
                retrieve and delete a Tweet.</center> 
        </p>
        <br></br>
        <br></br>
        <p>
            <br></br>
            <center><b>Our Team Members</b></center>
            <ul style={{display:'grid'}}>
                <li>Harshil Vyas (Team Leader) </li>
                <li>Miyar Karthik Kamath </li>
                <li>Ahmed Zaytoun </li>
                <li>Sanjay Sathyarapu </li>
            </ul>
        </p>
    </div>
  )
}

export default AboutView
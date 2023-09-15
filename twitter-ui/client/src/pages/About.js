import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-1000'>
            Welcome to our CMPE272-Twitter-Service
        </h1>
        <p>
        This is a simple web application created using React and Python which consumes Twitter API to to programmatically create, retrieve and delete a Tweet. 
        </p>
        <br></br>
        <p>
            <b>Our Team Members:</b>
            <ul>
                <li>Harshil Vyas (Team Leader) </li>
                <li>Miyar Karthik Kamath </li>
                <li>Ahmed Zaytoun </li>
                <li>Sanjay Sathyarapu </li>
            </ul>
        </p>
    </div>
  )
}

export default About
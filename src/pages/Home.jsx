import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Flashcard App</h1>
        <Link to="/learn">Start Lernen</Link>
    </div>
  )
}

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Flashcard App</h1>

        <button onClick={() => navigate("/categories") }>
          Lernen starten
        </button>
    </div>
  )
}

export default Home;
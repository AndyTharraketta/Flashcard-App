import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContext } from '../context/CardContext';

const Topics = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { categories, selectTopic } = useContext(CardContext);

  const category = categories.find((c) => c.id === id);

  if (!category) return <p>Kategorie nicht gefunden</p>;
  
    return (
    <div>
        <h2>Themen: {category.name}</h2>

        {category.topics.map((topic) => (
            <div key={topic.id}>
                <button 
                onClick={() => {
                    selectTopic(topic.id);
                    navigate("/learn");
                }}
                >
                    {topic.name}
                </button>
            </div>
        ))}
    </div>
  )
}

export default Topics;
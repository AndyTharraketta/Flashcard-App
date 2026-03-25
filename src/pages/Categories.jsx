import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const { categories } = useContext(CardContext);
    const navigate = useNavigate();

  return (
    <div>
        <h2>Kategorien</h2>

        {categories.map((cat) => (
            <div key={cat.id}>
                <button onClick={() => navigate(`/category/${cat.id}`)}>
                    {cat.name}
                </button>
            </div>
        ))}
    </div>
  );
};

export default Categories;
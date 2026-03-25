import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext.jsx";
import styles from "./CreateCard.module.css";

const CreateCard = () => {
  const { categories, addCard } = useContext(CardContext);
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
  const [topicId, setTopicId] = useState(categories[0]?.id || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;

    const newCard = {
      id: Date.now().toString(),
      question,
      answer,
    };

    addCard(categoryId, topicId, newCard);

    // Form zurücksetzen
    setQuestion("");
    setAnswer("");
    alert("Card added successfully!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Card</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Categorie:
          <select
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
              const cat = categories.find((c) => c.id === e.target.value);
              setTopicId(cat?.topics[0]?.id || "");
            }}
          >
            {categories.map((c) => {
              <option key={c.id} value={c.id}>
                {c.name}
              </option>;
            })}
          </select>
        </label>

        <label>
          Topic:
          <select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
            {categories
              .find((c) => c.id === categoryId)
              ?.topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
          </select>
        </label>

        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        <label>
          Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>

        <button type="submit">Add Card</button>
      </form>
      <button onClick={() => navigate("/")}>⬅️ Zurück zur Startseite</button>
    </div>
  );
};

export default CreateCard;

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import styles from "./Topics.module.css";

const Topics = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { categories, selectTopic } = useContext(CardContext);

  const category = categories.find((c) => c.id === id);

  if (!category) return <p>Kategorie nicht gefunden</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Themen: {category.name}</h2>
      <div className={styles.buttonList}>
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

      <button onClick={() => navigate("/categories")}>
        ⬅️ Zurück zu Kategorien
      </button>
    </div>
  );
};

export default Topics;

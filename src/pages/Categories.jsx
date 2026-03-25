import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  const { categories } = useContext(CardContext);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Kategorien</h2>

      <div className={styles.buttonList}>
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => navigate(`/category/${cat.id}`)}>
            {cat.name}
          </button>
        ))}
      </div>

      <button onClick={() => navigate("/")}>⬅️ Zurück zur Startseite</button>
    </div>
  );
};

export default Categories;

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flashcard App</h1>
      
      <div className={styles.buttonGroup}>
        <button onClick={() => navigate("/categories")}>Lernen starten</button>
        <button onClick={() => navigate("/create-card")}>
          Neue Karte erstellen
        </button>
      </div>
    </div>
  );
};

export default Home;

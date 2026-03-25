import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const {toggleTheme, theme} = useContext(CardContext);

  return (
    <div className={styles.container}>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

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

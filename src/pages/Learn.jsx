import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext.jsx";
import "../styles/Main.css";
import styles from "./Learn.module.css";
import Flashcard from "../components/Flashcard.jsx";

const Learn = () => {
  const navigate = useNavigate();
  const {
    currentCardIndex,
    isFlipped,
    nextCard,
    prevCard,
    flipCard,
    getCurrentCards,
  } = useContext(CardContext);

  const cards = getCurrentCards();

  if (cards.length === 0) {
    return <p>Keine Karten vorhanden</p>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lernmodus</h2>
      <p className={styles.counter}>
        Card {currentCardIndex + 1} of {cards.length}
      </p>

      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onClick={flipCard}
      />

      <div className={styles.buttonGroup}>
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          ⬅️ Zurück
        </button>
        <button
          onClick={nextCard}
          disabled={currentCardIndex === cards.length - 1}
        >
          Weiter ➡️
        </button>
      </div>

      <button onClick={() => navigate(-1)}>⬅️ Zurück zu Themen</button>
      <p>Klicke auf die Karte zum Umdrehen</p>
    </div>
  );
};

export default Learn;

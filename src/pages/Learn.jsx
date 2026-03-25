import React, { useContext } from "react";
import { CardContext } from "../context/CardContext.jsx";
import "../styles/Main.css";

const Learn = () => {

  const {
    currentCardIndex,
    isFlipped,
    nextCard,
    prevCard,
    flipCard,
    getCurrentCards
  } = useContext(CardContext);
  
  const cards = getCurrentCards();

  // console.log("Cards:", cards);

  if (cards.length === 0) {
    return <p>Keine Karten vorhanden</p>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <h2>Lernmodus</h2>

      <p>
        Card {currentCardIndex + 1} of {cards.length}
      </p>

      <div className="flashcard-container" onClick={flipCard}>
        <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
          <div className="flashcard-front">{currentCard.question}</div>
          <div className="flashcard-back">{currentCard.answer}</div>
        </div>
      </div>

      <button onClick={prevCard} disabled={currentCardIndex === 0}>Back</button>
      <button onClick={nextCard} disabled={currentCardIndex === cards.length -1}>Next</button>
    </div>
  );
};

export default Learn;

import React, { useContext } from "react";
import { CardContext } from "../context/CardContext.jsx";

const Learn = () => {
  

  const {
    categories,
    currentCardIndex,
    isFlipped,
    nextCard,
    prevCard,
    flipCard,
  } = useContext(CardContext);
  
  const cards = categories[0]?.topics[0]?.cards || [];

  console.log("Categories:", categories);
  console.log("Cards:", cards);

  if (cards.length === 0) {
    return <p>Keine Karten vorhanden</p>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <h2>Lernmodus</h2>

      <div onClick={flipCard} style={{ cursor: "pointer" }}>
        {isFlipped ? currentCard.answer : currentCard.question}
      </div>

      <button onClick={prevCard}>Zurück</button>
      <button onClick={() => nextCard(cards.length)}>Weiter</button>
    </div>
  );
};

export default Learn;

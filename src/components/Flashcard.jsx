import React from 'react';
import styles from "./Flashcards.module.css";

const Flashcard = ({ question, answer, isFlipped, onClick }) => {
  return (
    <div className={styles.flashcardContainer} onClick={onClick}>
        <div className={`${styles.flashcard} ${isFlipped ? styles.isFlipped : ""}`}>
            <div className={styles.front}>{question}</div>
            <div className={styles.back}>{answer}</div>
        </div>
    </div>
  )
}

export default Flashcard;
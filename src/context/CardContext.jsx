import React, { createContext, useState, useEffect } from 'react'

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Test
    useEffect(() => {
        const demoData = [
          {
            id: "1",
            name: "Mathe",
            topics: [
              {
                id: "1",
                name: "Grundlagen",
                cards: [
                  { id: "1", question: "Was ist 2 + 2?", answer: "4" },
                  { id: "2", question: "Was ist 3 * 3?", answer: "9" },
                ],
              },
            ],
          },
        ];
      
        try {
          const storedData = localStorage.getItem("flashcards");
          const parsedData = storedData ? JSON.parse(storedData) : null;
      
          // 🔹 Prüfen, ob LocalStorage Daten enthält
          if (parsedData && parsedData.length > 0) {
            setCategories(parsedData);
          } else {
            // 🔹 Fallback auf Demo-Daten
            setCategories(demoData);
          }
        } catch (error) {
          console.error("Fehler beim Laden der Karten:", error);
          setCategories(demoData);
        }
      }, []);

    // Daten beim Start laden
    // useEffect(() => {
    //     const storedData = localStorage.getItem("flaschcards");
    //     if (storedData) {
    //         setCategories(JSON.parse(storedData));
    //     }
    // }, []);

    // Daten speichern bei Änderung
    useEffect(() => {
        localStorage.setItem("flashcards", JSON.stringify(categories));
    }, [categories]);

    // Karte hinzufügen
    const addCard = (categoryId, topicId, newCard) => {
        setCategories(prev =>
            prev.map(cat =>
                cat.id === categoryId
                ? {
                    ...cat,
                    topics: cat.topics.map(topic =>
                        topic.id === topicId
                        ? {
                            ...topic,
                            cards: [...topic.cards, newCard],
                        }
                        : topic
                    ),
                }
                : cat
            )
        );
    };

    // Karte löschen
    const deleteCard = (categoryId, topicId, cardId) => {
        setCategories(prev =>
            prev.map(cat =>
                cat.id === categoryId
                ? {
                    ...cat,
                    topics: cat.topics.map(topic =>
                        topic.id === topicId
                        ? {
                            ...topic,
                            cards: topic.cards.filter(c => c.id !== cardId),
                        }
                        : topic
                    ),
                }
                : cat
            )
        );
    };

    // Navigation
    const nextCard = (cardsLength) => {
        setCurrentCardIndex(prev =>
            prev < cardsLength - 1 ? prev + 1 : prev
        );
        setIsFlipped(false);
    };

    const prevCard = () => {
        setCurrentCardIndex(prev => (prev > 0 ? prev -1 : prev));
        setIsFlipped(false);
    };

    // Flip
    const flipCard = () => {
        setIsFlipped(prev => !prev);
    }

    return (
        <CardContext.Provider 
            value={{ 
                categories,
                setCategories,
                currentCardIndex,
                isFlipped,
                addCard,
                deleteCard,
                nextCard,
                prevCard,
                flipCard,
            }} 
        >
            {children}
        </CardContext.Provider>
    );
};
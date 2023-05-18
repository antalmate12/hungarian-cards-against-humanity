"use client";

import whiteCards from "../../lib/data/white-cards";
import styles from "@/styles/Hero.module.scss";
import { config } from "../../lib/utils/config";
import WhiteCard from "./WhiteCard";
import blackCards from "../../lib/data/black-cards";
import BlackCard from "./BlackCard";
import { useEffect, useId, useRef, useState } from "react";

const Hero = () => {
  const [selectedBlackCard, setSelectedBlackCard] = useState<string>();
  const [selectedWhiteCards, setSelectedWhiteCards] = useState<string[]>();

  const [blackCardClasses, setBlackCardClasses] = useState<string[]>([
    styles.CenterBlackCard,
  ]);
  const [blackCardId, setBlackCardId] = useState<string>(
    (+new Date()).toString()
  );

  const addShakeToBlackCard = () => {
    setBlackCardClasses((prevBlackCardClasses) => [
      ...prevBlackCardClasses,
      "shakeAnimation",
    ]);
  };

  const removeShakeFromBlackCard = () => {
    setBlackCardClasses((prevBlackCardClasses) =>
      prevBlackCardClasses.filter(
        (blackCardClass) => blackCardClass !== "shakeAnimation"
      )
    );
  };

  useEffect(() => {
    // Set the selected black card to a random black card
    setSelectedBlackCard(
      blackCards[Math.floor(Math.random() * blackCards.length)]
    );

    // Select 4 random white cards
    const newSelectedWhiteCards: string[] = [];
    for (let i = 0; i < 4; i++) {
      const newSelectedWhiteCard =
        whiteCards[Math.floor(Math.random() * whiteCards.length)];
      newSelectedWhiteCards.push(newSelectedWhiteCard);
    }

    setSelectedWhiteCards(newSelectedWhiteCards);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const updateSelectedCards = () => {
      addShakeToBlackCard();
      setBlackCardId((+new Date()).toString());

      // Select a new black card
      const newSelectedBlackCard =
        blackCards[Math.floor(Math.random() * blackCards.length)];
      setSelectedBlackCard(newSelectedBlackCard);

      // Select 4 new white cards
      const newSelectedWhiteCards: string[] = [];
      for (let i = 0; i < 4; i++) {
        const newSelectedWhiteCard =
          whiteCards[Math.floor(Math.random() * whiteCards.length)];
        newSelectedWhiteCards.push(newSelectedWhiteCard);
      }
      setSelectedWhiteCards(newSelectedWhiteCards);

      // Remove the class
      setTimeout(() => {
        removeShakeFromBlackCard();
        setBlackCardId((+new Date()).toString());
      }, 100);
    };

    const startTimer = () => {
      intervalId = setInterval(updateSelectedCards, 10000);
    };

    const stopTimer = () => {
      clearInterval(intervalId);
    };

    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="container min-h-screen grid place-items-center">
      <h1 className={styles.HeroTitle}>Emberiség Ellenes kártyák</h1>

      <div className={styles.CardsHolder}>
        {selectedWhiteCards?.map((selectedWhiteCard, index) => (
          <WhiteCard
            className={styles.WhiteCard}
            key={index}
            title={selectedWhiteCard}
          />
        ))}

        {selectedBlackCard && (
          <BlackCard
            id={blackCardId}
            className={blackCardClasses.join(" ")}
            title={selectedBlackCard}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;

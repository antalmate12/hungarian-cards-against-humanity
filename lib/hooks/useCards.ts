import whiteCards from "../../lib/data/white-cards";
import blackCards from "../../lib/data/black-cards";
import { CardType } from "src/utils/models/card";

export default function useCards() {
  /**
   * Returns a random card from the given type
   */
  const getRandomCard = (type: CardType): string => {
    return (type === "white" ? whiteCards : blackCards)[
      Math.floor(
        Math.random() * (type === "white" ? whiteCards : blackCards).length
      )
    ];
  };

  //

  /**
   * Returns sum amount of random cards from the given type
   * @param type
   * @param sum
   * @returns
   */
  const selectMultipleRandomCards = (type: CardType, sum: number): string[] => {
    const selectedCards: string[] = [];

    for (let i = 0; i < sum; i++) {
      const newSelectedWhiteCard = (type === "white" ? whiteCards : blackCards)[
        Math.floor(
          Math.random() * (type === "white" ? whiteCards : blackCards).length
        )
      ];
      selectedCards.push(newSelectedWhiteCard);
    }

    return selectedCards;
  };

  //

  return {
    getRandomCard,
    selectMultipleRandomCards,
  };
}

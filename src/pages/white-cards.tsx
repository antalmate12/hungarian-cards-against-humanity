import WhiteCard from "@/components/WhiteCard";
import whiteCards from "@/data/white-cards";

const WhiteCards = () => {
  return (
    <ul className="flex flex-wrap">
      {whiteCards.map((card, index) => {
        return (
          <li key={index}>
            <WhiteCard title={card} />
          </li>
        );
      })}
    </ul>
  );
};

export default WhiteCards;

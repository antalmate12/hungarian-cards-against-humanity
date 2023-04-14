import whiteCards from "@/data/white-cards";
import styles from "@/styles/Hero.module.scss";
import { config } from "@/utils/config";
import WhiteCard from "./WhiteCard";

const Hero = () => {
  return (
    <div className="container">
      <h1>Hero</h1>

      <WhiteCard title={whiteCards[26]} />
    </div>
  );
};

export default Hero;

import styles from "@/styles/WhiteCard.module.scss";

const WhiteCard = ({ title }: { title: string }) => {
  return <div className={styles.WhiteCard}>{title}</div>;
};

export default WhiteCard;

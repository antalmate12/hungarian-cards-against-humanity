import styles from "@/styles/WhiteCard.module.scss";

const WhiteCard = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <div className={[styles.WhiteCard, className ?? ""].join(" ")}>
      <span className="hyphens-auto">{title}</span>
    </div>
  );
};

export default WhiteCard;

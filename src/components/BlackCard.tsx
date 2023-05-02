import styles from "@/styles/BlackCard.module.scss";
import { useEffect, useId, useRef } from "react";

const BlackCard = ({
  id,
  title,
  className,
}: {
  id?: string;
  title: string;
  className?: string;
}) => {
  const fallbackId = useId();
  const blackCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blackCardRef.current) {
      blackCardRef.current.id = id ?? fallbackId;
      blackCardRef.current.className = [styles.BlackCard, className ?? ""].join(
        " "
      );
    }
  }, [id, className, fallbackId]);

  return (
    <div
      ref={blackCardRef}
      id={id ?? fallbackId}
      className={[styles.BlackCard, className ?? ""].join(" ")}
    >
      <span className="hyphens-auto">{title}</span>
    </div>
  );
};

export default BlackCard;

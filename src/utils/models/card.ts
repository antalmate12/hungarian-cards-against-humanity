export interface Card {
  type: CardType;
  title: string;
  category?: string;
  tags?: string[];
}

export type CardType = "white" | "black";

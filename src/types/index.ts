export type Category =
  | "Greeting"
  | "Family"
  | "Food"
  | "Polite"
  | "Daily Life"
  | "Small Talk";

export interface Phrase {
  id: string;
  spanish: string;
  english: string;
  chinese: string;
  category: Category;
  pronunciation?: string;
}

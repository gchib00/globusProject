export interface State {
  city: {
    targetCity: string;
    clickedCity?: string;
  };
  answerResult: boolean | undefined;
  loading: boolean;
  user: User;
}
export interface MouseCoordinates {
  x?: number | null;
  y?: number | null;
}
export interface User {
  email: string | null;
  score: number;
}
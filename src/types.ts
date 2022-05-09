export interface State {
  city: {
    targetCity: string;
    clickedCity?: string;
  };
  answerResult: boolean | undefined;
  loading: boolean;
}
export interface MouseCoordinates {
  x?: number | null;
  y?: number | null;
}
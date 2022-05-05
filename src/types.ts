export interface State {
  city: {
    targetCity: string;
    clickedCity?: string;
    clickedCityPos?: {
      x: number,
      y: number,
    }
  };
  answerResult: boolean | undefined;
}
export interface MouseCoordinates {
  x?: number | null;
  y?: number | null;
}
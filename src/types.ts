export interface State {
  city: {
    targetCity: string;
    clickedCity: string;
  };
  clickedCityPos: ClickCoordinates;
}
export interface ClickCoordinates {
  x?: number | null;
  y?: number | null;
}
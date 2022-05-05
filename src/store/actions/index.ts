import { MouseCoordinates } from "../../types";

export const setCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
});
export const setClickedCity = (city: string, pos: MouseCoordinates) => ({
  type: 'SET_CLICKED_CITY',
  payload: { city, pos }
});
export const setAnswer = (answer: boolean) => ({
  type: 'SET_ANSWER',
  payload: answer
});
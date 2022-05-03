import { ClickCoordinates } from "../../types";

export const setCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
});
export const setClickedCity = (city: string) => ({
  type: 'SET_CLICKED_CITY',
  payload: city
})
export const setClickedCityPos = (mouse: ClickCoordinates) => ({
  type: 'SET_CLICKED_CITY_POS',
  payload: mouse
})
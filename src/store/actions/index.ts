export const setCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
});
export const setClickedCity = (city: string) => ({
  type: 'SET_CLICKED_CITY',
  payload: city
})
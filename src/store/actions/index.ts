export const setCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
});
export const setClickedCity = (city: string | undefined) => ({
  type: 'SET_CLICKED_CITY',
  payload: { city }
});
export const setAnswer = (answer: boolean | null) => ({
  type: 'SET_ANSWER',
  payload: answer
});
export const setLoading = (loading: boolean) => ({
  type: 'SET_LOADING_SCREEN',
  payload: loading
});
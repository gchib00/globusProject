export const setCity = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
})
export const setClickedCity = (city: string | undefined) => ({
  type: 'SET_CLICKED_CITY',
  payload: city,
})
export const setAnswer = (answer: boolean | null) => ({
  type: 'SET_ANSWER',
  payload: answer,
})
export const setLoading = (loading: boolean) => ({
  type: 'SET_LOADING_SCREEN',
  payload: loading,
})
export const setUserEmail = (email: string) => ({
  type: 'SET_USER_EMAIL',
  payload: email,
})
export const updateScore = (score: number) => ({
  type: 'UPDATE_SCORE',
  payload: score,
})
export const changeGlobeBrightness = (brightnessLevel: number) => ({
  type: 'CHANGE_GLOBE_BRIGHTNESS',
  payload: brightnessLevel,
})
export const changeCitiesColor = (color: string) => ({
  type: 'CHANGE_CITIES_COLOR',
  payload: color,
})

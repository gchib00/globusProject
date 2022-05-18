const initialState = {
  targetCity: '',
  clickedCity: undefined,
}

interface ActionType {
  type: string
  payload: string
}

export const cityReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_CITY': {
      return {
        targetCity: action.payload,
        clickedCity: state.clickedCity,
      }
    }
    case 'SET_CLICKED_CITY': {
      return {
        targetCity: state.targetCity,
        clickedCity: action.payload,
      }
    }
    default:
      return state
  }
}

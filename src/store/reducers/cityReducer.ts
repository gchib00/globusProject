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
        ...state,
        targetCity: action.payload,
      }
    }
    case 'SET_CLICKED_CITY': {
      return {
        ...state,
        clickedCity: action.payload,
      }
    }
    default:
      return state
  }
}

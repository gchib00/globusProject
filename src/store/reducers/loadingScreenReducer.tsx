const initialState = true

interface ActionType {
  type: string
  payload: boolean
}

export const loadingScreenReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_LOADING_SCREEN': {
      return action.payload
    }
    default:
      return state
  }
}

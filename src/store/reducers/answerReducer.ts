const initialState = null

interface ActionType {
  type: string
  payload: boolean | null
}

export const answerReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_ANSWER': {
      return action.payload
    }
    default:
      return state
  }
}

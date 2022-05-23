const initialState = false

interface ActionType {
  type: string
  payload: boolean
}

export const modalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SWITCH_MODAL': return action
    default: return state
  }
}
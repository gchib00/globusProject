const initialState = '';

interface ActionType {
  type: string;
  payload: string;
}

export const cityReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ('CHANGE_CITY'): {
      return action.payload;
    }
    default: return state;
  }
};

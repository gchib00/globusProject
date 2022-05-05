const initialState = null;

export const answerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ('SET_ANSWER'): {
      return action.payload;
    }
    default: return state;
  }
};

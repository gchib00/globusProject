import { User } from "../../types";

const initialState = {
  email: null,
  score: 0
};

interface ActionType {
  type: string;
  payload: string;
}

export const userReducer = (state = initialState, action: ActionType): User => {
  switch(action.type) {
    case ('UPDATE_SCORE'): {
      let newScore = state.score + Number(action.payload);
      if (newScore < 0) { newScore = 0; }
      return {
        email: state.email,
        score: newScore
      }
    }
    case ('SET_USER_EMAIL'): {
      return {
        email: action.payload,
        score: state.score
      }
    }
    default: return state;
  }
}
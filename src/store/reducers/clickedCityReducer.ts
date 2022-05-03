import { ClickCoordinates } from "../../types";

const initialState = {
  x: null,
  y: null
};

interface ActionType {
  type: string;
  payload: ClickCoordinates | null;
}

export const clickedCityReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ('SET_CLICKED_CITY_POS'): {
      return {
        x: action?.payload?.x,
        y: action?.payload?.y
      };
    }
    default: return state;
  }
};

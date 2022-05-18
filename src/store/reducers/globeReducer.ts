import { GlobeSettings } from '../../types'

const initialState = {
  brightness: 1,
  cityColor: 'red',
}

interface ActionType {
  type: string
  payload: GlobeSettings
}

export const globeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_GLOBE_BRIGHTNESS':
      return {
        ...state,
        brightness: action.payload,
      }
    case 'CHANGE_CITIES_COLOR':
      return {
        ...state,
        cityColor: action.payload,
      }
    default:
      return state
  }
}

export interface State {
  city: {
    targetCity: string
    clickedCity?: string
  }
  answerResult: boolean | undefined
  loading: boolean
  user: User
  globeSettings: GlobeSettings
  modal: boolean
}
export interface MouseCoordinates {
  x?: number | null
  y?: number | null
}
export interface City {
  countryName: string
  capitalName: string
  latitude: string
  longitude: string
  countryCode: string
  continent: string
}
export interface User {
  email: string | null
  score: number
}
export interface GlobeSettings {
  brightness: number
  cityColor: string
}

export interface IGetWeatherRequestDTO {
  city?: string
  coordinates?: {
    lat: number
    lon: number
  }
}

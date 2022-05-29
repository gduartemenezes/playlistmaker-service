import { Weather } from '../entities/Weather'

export interface IWeatherProvider {
  findByCity: (city: string) => Promise<Weather>
  findByCoordinates: (lat: string, lon: string) => Promise<Weather>
}

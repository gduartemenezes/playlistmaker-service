import { Weather } from '../../entities/Weather'

export interface IWeatherRepository {
  findByCity: (city: string) => Promise<Weather>
  findByCoordinates: (lat: number, lon: number) => Promise<Weather>
}

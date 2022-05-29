import { Weather } from '../../entities/Weather'
import { IWeatherProvider } from '../../providers/IWeatherProvider'
import { IGetWeatherRequestDTO } from './GetWeatherDTO'

export class GetWeatherUseCase {
  constructor (private readonly weatherProvider: IWeatherProvider) { }
  async execute (data: IGetWeatherRequestDTO): Promise<Weather> {
    console.log('data', data)
    if (data.city) {
      return await this.weatherProvider.findByCity(data.city)
    }
    if (data.lon && data.lat) {
      return await this.weatherProvider.findByCoordinates(
        data.lat,
        data.lon
      )
    }
  }
}

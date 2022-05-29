import { Weather } from '../../entities/Weather'
import { IWeatherRepository } from '../../repositories/implementations/IWeatherRepository'
import { IGetWeatherRequestDTO } from './GetWeatherDTO'

export class GetWeatherUseCase {
  constructor (private readonly weatherRepository: IWeatherRepository) { }
  async execute (data: IGetWeatherRequestDTO): Promise<Weather> {
    if (data.city) {
      return await this.weatherRepository.findByCity(data.city)
    }
    if (data.coordinates) {
      return await this.weatherRepository.findByCoordinates(
        data.coordinates.lat,
        data.coordinates.lon
      )
    }
  }
}

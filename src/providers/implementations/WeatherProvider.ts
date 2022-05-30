/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Weather } from '../../entities/Weather'
import { IWeatherProvider } from '../IWeatherProvider'
import axios from 'axios'
export class WeatherProvider implements IWeatherProvider {
  async findByCity (city: string): Promise<Weather> {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}`)
    console.log(response.data)
    return response.data
  }

  async findByCoordinates (lat: string, lon: string): Promise<Weather> {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}`)
    console.log(response.data)
    return response.data
  }
}

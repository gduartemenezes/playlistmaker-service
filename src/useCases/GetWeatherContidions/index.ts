import { WeatherProvider } from '../../providers/implementations/WeatherProvider'
import { GetWeatherController } from './GetWeatherController'
import { GetWeatherUseCase } from './GetWeatherUseCase'

const weatherProvider = new WeatherProvider()
const getWeatherUseCase = new GetWeatherUseCase(weatherProvider)
const getWeatherController = new GetWeatherController(getWeatherUseCase)

export { getWeatherController, getWeatherUseCase }

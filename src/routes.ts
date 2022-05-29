import { Router } from 'express'
import { getWeatherController } from './useCases/GetWeatherContidions'

const router = Router()

router.get('/weather', async (request, response) => {
  console.log(request.query)
  return await getWeatherController.handle(request, response)
})

export { router }

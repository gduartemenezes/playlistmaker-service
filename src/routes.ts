import { Router } from 'express'
import { getWeatherController } from './useCases/GetWeatherContidions'
import { createPlaylistController } from './useCases/CreatePlaylist'

const router = Router()

router.get('/weather', async (request, response) => {
  return await getWeatherController.handle(request, response)
})
router.get('/playlist', async (request, response) => {
  return await createPlaylistController.handle(request, response)
})

export { router }

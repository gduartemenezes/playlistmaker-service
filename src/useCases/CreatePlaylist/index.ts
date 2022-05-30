
import { PlaylistProvider } from '../../providers/implementations/PlaylistProvider'
import { CreatePlaylistController } from './CreatePlaylistController'
import { CreatePlaylistUseCase } from './CreatePlaylistUseCase'

const playlistProvider = new PlaylistProvider()
const createPlaylistUseCase = new CreatePlaylistUseCase(playlistProvider)
const createPlaylistController = new CreatePlaylistController(createPlaylistUseCase)

export { createPlaylistController, createPlaylistUseCase }

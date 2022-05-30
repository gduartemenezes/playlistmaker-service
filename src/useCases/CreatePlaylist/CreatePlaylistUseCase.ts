import { Playlist } from '../../entities/Playlist'
import { IPlaylistProvider } from '../../providers/IPlaylistProvider'
import { ICreatePlaylistRequestDTO } from './CreatePlaylistDTO'

export class CreatePlaylistUseCase {
  constructor (private readonly playlistProvider: IPlaylistProvider) { }
  async execute (data: ICreatePlaylistRequestDTO): Promise<Playlist> {
    return await this.playlistProvider.create(data.temperature)
  }
}

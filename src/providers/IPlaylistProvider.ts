import { Playlist } from '../entities/Playlist'

export interface IPlaylistProvider {
  create: (temperature: string) => Promise<Playlist>
}

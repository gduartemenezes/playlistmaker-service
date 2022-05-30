/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Playlist } from '../../entities/Playlist'
import { IPlaylistProvider } from '../IPlaylistProvider'
import SpotifyWebApi from 'spotify-web-api-node'
export class PlaylistProvider implements IPlaylistProvider {
  async create (temperature: string): Promise<Playlist> {
    try {
      const spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      })
      // spotifyApi.clientCredentialsGrant()
      const tokenCreationResponse = await spotifyApi.clientCredentialsGrant()
      spotifyApi.setAccessToken(tokenCreationResponse.body.access_token)
      const temperatureNumber = parseInt(temperature) - 273.15
      let musicMood = ''

      switch (true) {
        case temperatureNumber > 30:
          musicMood = 'party'
          break
        case temperatureNumber < 30 && temperatureNumber >= 15:
          musicMood = 'pop'
          break
        case temperatureNumber < 15 && temperatureNumber >= 10:
          musicMood = 'rock'
          break
        case temperatureNumber < 10:
          musicMood = 'classical'
          break
        default:
          musicMood = 'party'
          break
      }
      const spotifyResponse = await spotifyApi.searchPlaylists(musicMood, { limit: 1 })
      const chosenplaylist = spotifyResponse.body.playlists.items[0]
      const playlistTracksResponse = await spotifyApi.getPlaylistTracks(chosenplaylist.id)
      const playlistTracks = playlistTracksResponse.body.items.map(item => {
        return {
          id: item.track.id,
          title: item.track.name,
          artist: item.track.artists[0].name
        }
      })
      const playlist = new Playlist(chosenplaylist.id, chosenplaylist.name, chosenplaylist.description, chosenplaylist.owner.id, chosenplaylist.owner.display_name, playlistTracks)

      console.log(chosenplaylist)
      console.log(playlist)
      return playlist
    } catch (error) {
      throw new Error(error)
    }
  }
};

interface Track {
  id: string
  title: string
  artist: string
}

export class Playlist {
  constructor (
    public id: string,
    public name: string,
    public description: string,
    public userId: string,
    public userName: string,
    public tracks: Track[]
  ) { }
}

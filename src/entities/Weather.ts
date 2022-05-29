export class Weather {
  constructor (
    public city: string,
    public temperature: number,
    public humidity: number,
    public wind: number,
    public description: string,
    public date: Date,
    public coordinates: {
      lat: number
      lon: number
    }
  ) { }
}

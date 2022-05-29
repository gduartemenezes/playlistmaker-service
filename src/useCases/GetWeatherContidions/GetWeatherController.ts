import { Request, Response } from 'express'
import { GetWeatherUseCase } from './GetWeatherUseCase'

export class GetWeatherController {
  constructor (private readonly getWeatherUseCase: GetWeatherUseCase) { }
  async handle (req: Request, res: Response): Promise<Response> {
    const query = req.query
    console.log(query)
    try {
      const response = await this.getWeatherUseCase.execute(req.query)
      return res.status(200).send(response)
    } catch (err) {
      return res.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}

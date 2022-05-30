import { Request, Response } from 'express'
import { CreatePlaylistUseCase } from './CreatePlaylistUseCase'

export class CreatePlaylistController {
  constructor (private readonly createPlaylistUseCase: CreatePlaylistUseCase) { }
  async handle (req: Request, res: Response): Promise<Response> {
    const query = req.query
    console.log(query)
    try {
      const response = await this.createPlaylistUseCase.execute(req.query)
      return res.status(200).send(response)
    } catch (err) {
      return res.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}

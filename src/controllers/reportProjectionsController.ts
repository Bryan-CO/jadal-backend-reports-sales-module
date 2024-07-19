import { Request, Response } from 'express'

// eslint-disable-next-line
export class ReportProjectionController {
  static async getAll (req: Request, res: Response): Promise<void> {
    res.send('Proyecciones')
  }
}

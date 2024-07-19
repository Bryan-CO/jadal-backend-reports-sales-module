import { Request, Response } from 'express'

// eslint-disable-next-line
export class ReportSalesController {
  static async getAll (req: Request, res: Response): Promise<void> {
    res.send('Ventas y compras')
  }
}

import { NextFunction, Request, Response } from 'express'
import { DatabaseConnection } from '../database/dataConnection'
import { DataAcess } from '../database/dataAccess'
import { ReportBalanceRepository } from '../repository/reportBalanceRepository'
import { ReportBalanceService } from '../services/reportBalanceService'

const dbConnection = new DatabaseConnection()
const dbAccess = new DataAcess(dbConnection)
const reportBalanceRepository = new ReportBalanceRepository(dbAccess)
// eslint-disable-next-line
export class ReportSalesController {
  static async getAll (req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await new ReportBalanceService(reportBalanceRepository).getAllData()
    res.send(result)
  }
}

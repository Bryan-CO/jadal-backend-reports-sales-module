import { Request, Response } from 'express'
import { DataAcess } from '../database/dataAccess'
import { DatabaseConnection } from '../database/dataConnection'
import { ReportProfitService } from '../services/reportProfitService'
import { ReportProfitRepository } from '../repository/reportProfitRepository'
import { ResponseModel } from '../utils/ReponseModel'

const dbConnection = new DatabaseConnection()
const dbAccess = new DataAcess(dbConnection)
const reportProfitRepository = new ReportProfitRepository(dbAccess)

// eslint-disable-next-line
export class ReportProfitController {
  static async getAll (req: Request, res: Response): Promise<void> {
    const { fechaInicio, fechaFin } = req.query

    const result = await new ReportProfitService(reportProfitRepository).getAllDataByPeriod(fechaInicio as string, fechaFin as string)
    ResponseModel.success({ res, data: result })
  }
}

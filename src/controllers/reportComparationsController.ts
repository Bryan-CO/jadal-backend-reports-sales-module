import { Request, Response } from 'express'
import { DataAcess } from '../database/dataAccess'
import { DatabaseConnection } from '../database/dataConnection'
import { ReportProfitService } from '../services/reportProfitService'
import { ReportProfitRepository } from '../repository/reportProfitRepository'
import { ResponseModel } from '../utils/ReponseModel'
import { ReportComparationsRepository } from '../repository/reportComparationsRepository'
import { ReportComparationsService } from '../services/reportComparationsService'

const dbConnection = new DatabaseConnection()
const dbAccess = new DataAcess(dbConnection)
const reportComparationsRepository = new ReportComparationsRepository(dbAccess)

// eslint-disable-next-line
export class ReportComparationsController {
  static async getAll (req: Request, res: Response): Promise<void> {
    const { fechaInicio, fechaFin } = req.query

    const result = await new ReportComparationsService(reportComparationsRepository).getAllDataByPeriod(fechaInicio as string, fechaFin as string)
    ResponseModel.success({ res, data: result })
  }
}

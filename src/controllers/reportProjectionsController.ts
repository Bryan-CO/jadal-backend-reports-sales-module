import { NextFunction, Request, Response } from 'express'
import { DatabaseConnection } from '../database/dataConnection'
import { DataAcess } from '../database/dataAccess'
import { ReportProjectionsRepository } from '../repository/reportProjectionsRepository'
import { ReportProjectionsService } from '../services/reportProjectionsService'
import { ResponseModel } from '../utils/ReponseModel'

const dbConnection = new DatabaseConnection()
const dbAccess = new DataAcess(dbConnection)
const reportProjectsRepository = new ReportProjectionsRepository(dbAccess)
const reportProjectsService = new ReportProjectionsService(reportProjectsRepository)
// eslint-disable-next-line
export class ReportProjectionController {
  static async getAll (req: Request, res: Response, next: NextFunction): Promise<void> {
    const { fechaInicio, fechaFin } = req.query
    const result = await reportProjectsService.getAllData(fechaInicio as string, fechaFin as string)
    ResponseModel.success({ res, data: result })
  }
}

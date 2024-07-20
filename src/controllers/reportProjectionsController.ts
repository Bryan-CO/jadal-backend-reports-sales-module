import { NextFunction, Request, Response } from 'express'
import { DatabaseConnection } from '../database/dataConnection'
import { DataAcess } from '../database/dataAccess'
import { ReportProjectionsRepository } from '../repository/reportProjectionsRepository'
import { ReportProjectionsService } from '../services/reportProjectionsService'

const dbConnection = new DatabaseConnection()
const dbAccess = new DataAcess(dbConnection)
const reportProjectsRepository = new ReportProjectionsRepository(dbAccess)
// eslint-disable-next-line
export class ReportProjectionController {
  static async getAll (req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await new ReportProjectionsService(reportProjectsRepository).getAllData()
    res.send(result)
  }
}

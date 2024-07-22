import { Projection, ReportProjectionsRepository } from '../repository/reportProjectionsRepository'

export class ReportProjectionsService {
  reportProjectionsService: ReportProjectionsRepository
  constructor (reportProjectionsService: ReportProjectionsRepository) {
    this.reportProjectionsService = reportProjectionsService
  }

  async getAllData (fechaInicio: string, fechaFin: string): Promise<Projection[]> {
    return await this.reportProjectionsService.getDataByPeriod(fechaInicio, fechaFin)
  }
}

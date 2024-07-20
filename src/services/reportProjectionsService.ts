import { Projection, ReportProjectionsRepository } from '../repository/reportProjectionsRepository'

export class ReportProjectionsService {
  reportProjectionsService: ReportProjectionsRepository
  constructor (reportProjectionsService: ReportProjectionsRepository) {
    this.reportProjectionsService = reportProjectionsService
  }

  async getAllData (): Promise<Projection[]> {
    return await this.reportProjectionsService.getDataByPeriod()
  }
}

import { Profit, ReportProfitRepository } from '../repository/reportProfitRepository'

export class ReportProfitService {
  reportProfitService: ReportProfitRepository
  constructor (reportProfitService: ReportProfitRepository) {
    this.reportProfitService = reportProfitService
  }

  async getAllData (): Promise<Profit[]> {
    return await this.reportProfitService.getDataByPeriod()
  }
}

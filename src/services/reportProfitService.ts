import { Profit, ReportProfitRepository } from '../repository/reportProfitRepository'

export class ReportProfitService {
  reportProfitService: ReportProfitRepository
  constructor (reportProfitService: ReportProfitRepository) {
    this.reportProfitService = reportProfitService
  }

  async getAllDataByPeriod (fechaInicio: string, fechaFin: string): Promise<Profit[]> {
    return await this.reportProfitService.getDataByPeriod(fechaInicio, fechaFin)
  }
}

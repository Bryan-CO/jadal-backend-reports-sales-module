import { ProfitReport, ReportProfitRepository } from '../repository/reportProfitRepository'

export class ReportProfitService {
  reportProfitRepository: ReportProfitRepository
  constructor (reportProfitService: ReportProfitRepository) {
    this.reportProfitRepository = reportProfitService
  }

  async getAllDataByPeriod (fechaInicio: string, fechaFin: string): Promise<ProfitReport> {
    return await this.reportProfitRepository.getAllDataByPeriod(fechaInicio, fechaFin)
  }
}

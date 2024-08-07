import { Comparation, ReportComparationsRepository } from '../repository/reportComparationsRepository'

export class ReportComparationsService {
  reportComparationsService: ReportComparationsRepository
  constructor (reportComparationsService: ReportComparationsRepository) {
    this.reportComparationsService = reportComparationsService
  }

  async getAllDataByPeriod (fechaInicio: string, fechaFin: string): Promise<Comparation> {
    return await this.reportComparationsService.getDataByPeriod(fechaInicio, fechaFin)
  }
}

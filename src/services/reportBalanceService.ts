import { Balance, ReportBalanceRepository } from '../repository/reportBalanceRepository'

export class ReportBalanceService {
  reportBalanceService: ReportBalanceRepository
  constructor (reportBalanceService: ReportBalanceRepository) {
    this.reportBalanceService = reportBalanceService
  }

  async getAllData (): Promise<Balance[]> {
    return await this.reportBalanceService.getDataByPeriod()
  }
}

import { DataAcess } from '../database/dataAccess'
import { pgToBalance } from '../mappers/reportBalanceMapper'

export interface Balance {
  mes: number
  ventas: number
  gastosCompras: number
}

export class ReportBalanceRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (): Promise<Balance[]> {
    const result = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_balance' })
    return pgToBalance(result)
  }
}

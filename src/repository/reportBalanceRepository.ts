import { DataAcess } from '../database/dataAccess'
import { pgToBalance } from '../mappers/reportBalanceMapper'

export interface Balance {
  mes: number
  ventas: number
  comprasGastos: number
}

export class ReportBalanceRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (fechaInicio: string, fechaFin: string): Promise<Balance[]> {
    const result = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_balance', parameters: [fechaInicio, fechaFin] })
    return pgToBalance(result)
  }
}

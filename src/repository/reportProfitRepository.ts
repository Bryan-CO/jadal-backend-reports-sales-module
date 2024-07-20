import { DataAcess } from '../database/dataAccess'
import { pgToProfit } from '../mappers/reportProfitMapper'

export interface Profit {
  mes: number
  utilidadNeta: number
  utilidadBruta: number
}

export class ReportProfitRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (): Promise<Profit[]> {
    const result = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_utilidades', parameters: [1, 4] })
    return pgToProfit(result)
  }
}

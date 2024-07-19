import { DataAcess } from '../database/dataAccess'

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
    const result: Profit[] = await this.dbAcess.executeProcedure({})
    return result
  }
}

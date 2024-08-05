import { DataAcess } from '../database/dataAccess'
import { pgToComparation } from '../mappers/reportComparationsMapper'

export interface Comparation {
  ventas: number
  compras: number
  gastos: number
}


export class ReportComparationsRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (fechaInicio: string, fechaFin: string): Promise<Comparation> {
    const data = pgToComparation(await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_comparaciones', parameters: [fechaInicio, fechaFin] }))
    return (data)
  }
}
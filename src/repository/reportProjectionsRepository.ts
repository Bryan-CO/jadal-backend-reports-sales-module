import { DataAcess } from '../database/dataAccess'
import { pgToProject } from '../mappers/reportProjectionsMapper'

export interface Projection {
  mes: number
  promedio: number
  incremento: number
}

export class ReportProjectionsRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (fechaInicio: string, fechaFin: string): Promise<Projection[]> {
    const result = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_promedios', parameters: [fechaInicio, fechaFin] })
    return pgToProject(result)
  }
}

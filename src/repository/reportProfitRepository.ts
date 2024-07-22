import { DataAcess } from '../database/dataAccess'
import { pgToProfit } from '../mappers/reportProfitMapper'

export interface Profit {
  mes: number
  año: number
  utilidadNeta: number
  utilidadBruta: number
}
export interface MetricProfit {
  totalUtilidadBruta: number
  totalUtilidadNeta: number
  promedioUtilidadBruta: number
  promedioUtilidadNeta: number
}

export interface ProfitReport {
  profits: Profit[]
  metrics: MetricProfit
}

export class ReportProfitRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getAllDataByPeriod (fechaInicio: string, fechaFin: string): Promise<ProfitReport> {
    const data = pgToProfit(await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_utilidades', parameters: [fechaInicio, fechaFin] }))
    const metrics = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_metricas_utilidades', parameters: [fechaInicio, fechaFin] })
    const result: ProfitReport = { metrics, profits: data }
    return (result)
  }
}

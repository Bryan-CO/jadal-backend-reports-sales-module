import { DataAcess } from '../database/dataAccess'
import { pgToProfit } from '../mappers/reportProfitMapper'

export interface Profit {
  mes: number
  año: number
  utilidadNeta: number
  utilidadBruta: number
  variacion: number
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
    const metrics = obtenerMetricas(data)
    const result: ProfitReport = { metrics, profits: data }
    return (result)
  }
}

function obtenerMetricas (profits: Profit[]): MetricProfit {
  let totalUtilidadBruta = 0
  let totalUtilidadNeta = 0

  profits.forEach(profit => {
    totalUtilidadBruta += profit.utilidadBruta
    totalUtilidadNeta += profit.utilidadNeta
  })
  const promedioUtilidadBruta = totalUtilidadBruta / profits.length
  const promedioUtilidadNeta = totalUtilidadNeta / profits.length

  return {
    totalUtilidadBruta, totalUtilidadNeta, promedioUtilidadBruta, promedioUtilidadNeta
  }
}

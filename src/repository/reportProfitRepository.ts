import { DataAcess } from '../database/dataAccess'
import { pgToMetricProfit, pgToProfit } from '../mappers/reportProfitMapper'
import { calcularPorcentajeCambio, subtractOneYear } from '../utils/dateValidation'

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

  porcentajeTotalUtilidadBruta?: number
  porcentajeTotalUtilidadNeta?: number
  porcentajePromedioUtilidadBruta?: number
  porcentajePromedioUtilidadNeta?: number
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
    const newFechaInicio = subtractOneYear(fechaInicio)
    const newFechaFin = subtractOneYear(fechaFin)

    const oldMetrics = pgToMetricProfit(await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_metricas_utilidades', parameters: [newFechaInicio, newFechaFin] }))
    const metrics = obtenerMetricas(data, oldMetrics)
    const result: ProfitReport = { metrics, profits: data }
    return (result)
  }
}

function obtenerMetricas (profits: Profit[], oldMetrics: MetricProfit): MetricProfit {
  let totalUtilidadBruta = 0
  let totalUtilidadNeta = 0

  profits.forEach(profit => {
    totalUtilidadBruta += profit.utilidadBruta
    totalUtilidadNeta += profit.utilidadNeta
  })

  const numProfits = profits.length
  const promedioUtilidadBruta = numProfits > 0 ? totalUtilidadBruta / numProfits : 0
  const promedioUtilidadNeta = numProfits > 0 ? totalUtilidadNeta / numProfits : 0

  // Porcentajes de aumento o descenso

  const porcentajeTotalUtilidadBruta = calcularPorcentajeCambio(totalUtilidadBruta, oldMetrics.totalUtilidadBruta)
  const porcentajeTotalUtilidadNeta = calcularPorcentajeCambio(totalUtilidadNeta, oldMetrics.totalUtilidadNeta)
  const porcentajePromedioUtilidadBruta = calcularPorcentajeCambio(promedioUtilidadBruta, oldMetrics.promedioUtilidadBruta)
  const porcentajePromedioUtilidadNeta = calcularPorcentajeCambio(promedioUtilidadNeta, oldMetrics.promedioUtilidadNeta)

  return {
    totalUtilidadBruta,
    totalUtilidadNeta,
    promedioUtilidadBruta,
    promedioUtilidadNeta,
    porcentajeTotalUtilidadBruta,
    porcentajeTotalUtilidadNeta,
    porcentajePromedioUtilidadBruta,
    porcentajePromedioUtilidadNeta
  }
}

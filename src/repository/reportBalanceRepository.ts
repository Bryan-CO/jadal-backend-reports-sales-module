import { DataAcess } from '../database/dataAccess'
import { pgToBalance, pgToMetricBalance } from '../mappers/reportBalanceMapper'
import { calcularPorcentajeCambio, subtractOneYear } from '../utils/dateValidation'

export interface Balance {
  mes: number
  año: number
  ventas: number
  comprasGastos: number
}

export type DeficitStatus = 'A FAVOR' | 'EN CONTRA' | 'EQUIVALENTE'

export interface MetricBalance {
  totalVentas: number
  totalCompras: number
  deficitTotal: number
  estadoDeficit: DeficitStatus

  porcentajeTotalVentas?: number
  porcentajeTotalCompras?: number
}

export interface BalanceReport {
  balances: Balance[]
  metrics: MetricBalance
}

export class ReportBalanceRepository {
  private readonly dbAcess
  constructor (dbAccess: DataAcess) {
    this.dbAcess = dbAccess
  }

  async getDataByPeriod (fechaInicio: string, fechaFin: string): Promise<BalanceReport> {
    const data = pgToBalance(await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_balance', parameters: [fechaInicio, fechaFin] }))
    const newFechaInicio = subtractOneYear(fechaInicio)
    const newFechaFin = subtractOneYear(fechaFin)
    const oldMetrics = pgToMetricBalance(await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_metricas_balance', parameters: [newFechaInicio, newFechaFin] }))
    const metrics = obtenerMetricas(data, oldMetrics)
    const result: BalanceReport = { metrics, balances: data }
    return (result)
  }
}

function obtenerMetricas (balances: Balance[], oldMetrics: MetricBalance): MetricBalance {
  let totalVentas = 0
  let totalCompras = 0

  balances.forEach(balance => {
    totalVentas += balance.ventas
    totalCompras += balance.comprasGastos
  })
  const deficitTotal = totalVentas - totalCompras
  const estadoDeficit = totalVentas > totalCompras
    ? 'A FAVOR'
    : totalVentas < totalCompras
      ? 'EN CONTRA'
      : 'EQUIVALENTE'

  const porcentajeTotalVentas = calcularPorcentajeCambio(totalVentas, oldMetrics.totalVentas)
  const porcentajeTotalCompras = calcularPorcentajeCambio(totalCompras, oldMetrics.totalCompras)
  return {
    totalVentas, totalCompras, deficitTotal, estadoDeficit, porcentajeTotalCompras, porcentajeTotalVentas
  }
}

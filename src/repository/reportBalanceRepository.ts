import { DataAcess } from '../database/dataAccess'
import { pgToBalance } from '../mappers/reportBalanceMapper'

export interface Balance {
  mes: number
  año: number
  ventas: number
  comprasGastos: number
}

export type DeficitStatus = 'A FAVOR' | 'EN CONTRA'

export interface MetricBalance {
  totalVentas: number
  totalCompras: number
  deficitTotal: number
  estadoDeficit: DeficitStatus
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
    const metrics = obtenerMetricas(data)
    const result: BalanceReport = { metrics, balances: data }
    return (result)
  }
}

function obtenerMetricas (balances: Balance[]): MetricBalance {
  let totalVentas = 0
  let totalCompras = 0

  balances.forEach(balance => {
    totalVentas += balance.ventas
    totalCompras += balance.comprasGastos
  })
  const deficitTotal = totalVentas - totalCompras
  const estadoDeficit = totalVentas > totalCompras ? 'A FAVOR' : 'EN CONTRA'

  return {
    totalVentas, totalCompras, deficitTotal, estadoDeficit
  }
}

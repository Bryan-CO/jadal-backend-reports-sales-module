import { DataAcess } from '../database/dataAccess'
import { pgToBalance, pgToBalanceMetric } from '../mappers/reportBalanceMapper'

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
    const metrics = await this.dbAcess.executeProcedure({ nameProcedure: 'obtener_metricas_balance', parameters: [fechaInicio, fechaFin] })
    const updateMetrics = pgToBalanceMetric(metrics[0])

    const result: BalanceReport = { metrics: updateMetrics, balances: data }
    console.log(result)
    return (result)
  }
}

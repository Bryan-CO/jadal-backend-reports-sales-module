import { Balance, MetricBalance } from '../repository/reportBalanceRepository'

export function pgToBalance (reportBalances: any[]): Balance[] {
  const balances: Balance[] = reportBalances.map(data => ({
    año: Number(data.anio),
    mes: Number(data.mes),
    ventas: parseFloat(data.ventas),
    comprasGastos: parseFloat(data.comprasgastos),
    utilidad: parseFloat(data.utilidad)
  }))
  return balances
}

export function pgToMetricBalance ([metricBalance]: any): MetricBalance {
  return {
    totalCompras: metricBalance.totalcompras ?? 0,
    totalVentas: metricBalance.totalventas ?? 0,
    deficitTotal: metricBalance.deficittotal ?? 0,
    estadoDeficit: metricBalance.estadodeficit ?? 0
  }
}

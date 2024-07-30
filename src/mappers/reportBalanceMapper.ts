import { Balance, MetricBalance } from '../repository/reportBalanceRepository'

export function pgToBalance (reportBalances: any[]): Balance[] {
  const balances: Balance[] = reportBalances.map(data => ({
    año: Number(data.anio),
    mes: Number(data.mes),
    ventas: parseFloat(data.ventas),
    comprasGastos: parseFloat(data.comprasgastos)
  }))
  return balances
}

export function pgToMetricBalance ([metricBalance]: any): MetricBalance {
  return {
    totalCompras: metricBalance.totalcompras,
    totalVentas: metricBalance.totalventas,
    deficitTotal: metricBalance.deficittotal,
    estadoDeficit: metricBalance.estadodeficit
  }
}

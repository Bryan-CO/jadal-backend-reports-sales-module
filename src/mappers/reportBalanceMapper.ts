import { Balance, DeficitStatus, MetricBalance } from '../repository/reportBalanceRepository'

export function pgToBalance (reportProfits: any[]): Balance[] {
  const reportsMapped: Balance[] = []
  reportProfits.forEach((oldReport) => {
    const report: Balance = {
      mes: oldReport.mes,
      año: oldReport.anio,
      ventas: oldReport.ventas,
      comprasGastos: oldReport.comprasgastos
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

export function pgToBalanceMetric (oldBalanceReport: any): MetricBalance {
  const state: DeficitStatus = oldBalanceReport.totalventas > oldBalanceReport.totalcompras ? 'A FAVOR' : 'EN CONTRA'
  const metric: MetricBalance = {
    totalVentas: oldBalanceReport.totalventas,
    totalCompras: oldBalanceReport.totalcompras,
    deficitTotal: oldBalanceReport.deficittotal,
    estadoDeficit: state
  }
  return metric
}

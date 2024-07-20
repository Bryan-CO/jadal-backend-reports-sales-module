import { Balance } from '../repository/reportBalanceRepository'

export function pgToBalance (reportProfits: any[]): Balance[] {
  const reportsMapped: Balance[] = []
  reportProfits.forEach((oldReport) => {
    const report: Balance = {
      mes: oldReport.mes,
      ventas: oldReport.ventas,
      gastosCompras: oldReport.gastos_compras
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

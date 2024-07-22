import { Profit } from '../repository/reportProfitRepository'

export function pgToProfit (reportProfits: any[]): Profit[] {
  const reportsMapped: Profit[] = []
  reportProfits.forEach((oldReport) => {
    const report: Profit = {
      mes: oldReport.mes,
      año: oldReport.anio,
      utilidadBruta: oldReport.utilidadbruta,
      utilidadNeta: oldReport.utilidadneta
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

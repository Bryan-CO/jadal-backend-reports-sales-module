import { Projection } from '../repository/reportProjectionsRepository'

export function pgToProject (reportProjections: any[]): Projection[] {
  const reportsMapped: Projection[] = []
  reportProjections.forEach((oldReport) => {
    const report: Projection = {
      mes: oldReport.mes,
      promedio: oldReport.promedio,
      incremento: oldReport.incremento
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

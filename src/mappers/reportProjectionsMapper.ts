import { Projection } from '../repository/reportProjectionsRepository'

export function pgToProject (reportProjections: any[]): Projection[] {
  const reportsMapped: Projection[] = []
  reportProjections.forEach((oldReport) => {
    const report: Projection = {
      mes: oldReport.mes,
      año: oldReport.anio,
      promedio: parseFloat(oldReport.promedio),
      incremento: parseFloat(oldReport.incremento),
      ponderado: parseFloat(oldReport.ponderado),
      valorReal: parseFloat(oldReport.valorreal)
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

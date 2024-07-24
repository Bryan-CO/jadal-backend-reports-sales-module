import { Projection } from '../repository/reportProjectionsRepository'

export function pgToProject (reportProjections: any[]): Projection[] {
  const reportsMapped: Projection[] = []
  reportProjections.forEach((oldReport) => {
    const report: Projection = {
      mes: oldReport.mes,
      año: oldReport.anio,
      promedio: oldReport.promedio,
      incremento: oldReport.incremento,
      pronostico: oldReport.pronostico,
      ponderado: oldReport.ponderado
    }
    reportsMapped.push(report)
  })
  return reportsMapped
}

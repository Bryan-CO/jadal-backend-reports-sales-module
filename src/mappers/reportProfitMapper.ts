import { Profit } from '../repository/reportProfitRepository'

export function pgToProfit (reportProfits: any[]): Profit[] {
  const reports: Profit[] = reportProfits.map(data => ({
    año: Number(data.anio),
    mes: Number(data.mes),
    utilidadBruta: parseFloat(data.utilidadbruta),
    utilidadNeta: parseFloat(data.utilidadneta),
    variacion: Number(data.variacion)
  }))
  return reports
}

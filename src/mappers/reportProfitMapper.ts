import { MetricProfit, Profit } from '../repository/reportProfitRepository'

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

export function pgToMetricProfit ([metricProfit]: any): MetricProfit {
  return {
    totalUtilidadBruta: metricProfit.totalutilidadbruta,
    totalUtilidadNeta: metricProfit.totalutilidadneta,
    promedioUtilidadBruta: metricProfit.promedioutilidadbruta,
    promedioUtilidadNeta: metricProfit.promedioutilidadneta
  }
}

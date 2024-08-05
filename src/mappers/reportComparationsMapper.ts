import { Balance, MetricBalance } from '../repository/reportBalanceRepository'
import { Comparation } from '../repository/reportComparationsRepository'

export function pgToComparation ([_comparations]: any): Comparation {
  const comparations: Comparation = {
    ventas: parseFloat(_comparations.ventas ?? 0),
    compras: parseFloat(_comparations.compras ?? 0),
    gastos: parseFloat(_comparations.gastos ?? 0)
  }
  return comparations
}
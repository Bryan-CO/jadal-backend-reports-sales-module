import { Comparation } from '../repository/reportComparationsRepository'

export function pgToComparation ([_comparations]: any): Comparation {
  const comparations: Comparation = {
    ventas: parseFloat(_comparations.totalventas ?? 0),
    compras: parseFloat(_comparations.totalcompras ?? 0),
    gastos: parseFloat(_comparations.totalgastos ?? 0)
  }
  return comparations
}

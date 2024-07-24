import { Balance } from '../repository/reportBalanceRepository'

export function pgToBalance (reportBalances: any[]): Balance[] {
  const balances: Balance[] = reportBalances.map(data => ({
    año: Number(data.anio),
    mes: Number(data.mes),
    ventas: parseFloat(data.ventas),
    comprasGastos: parseFloat(data.comprasgastos)
  }))
  return balances
}

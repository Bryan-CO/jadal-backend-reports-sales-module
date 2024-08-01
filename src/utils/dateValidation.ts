import { format, isValid, parse, subYears } from 'date-fns'

export function validarFechaString (fechaString: string): boolean {
  const fecha = parse(fechaString, 'yyyy-MM-dd', new Date())
  return isValid(fecha)
}

export function subtractOneYear (dateString: string): string {
  // 1. Convertir el string de fecha a un objeto Date
  const date = parse(dateString, 'yyyy-MM-dd', new Date())

  // 2. Restar un año
  const newDate = subYears(date, 1)

  // 3. Convertir el objeto Date de vuelta a un string en el formato deseado (YYYY-MM-DD)
  return format(newDate, 'yyyy-MM-dd')
}

export function calcularPorcentajeCambio (actual: number, anterior: number): number {
  if (actual && !anterior) return 100
  if (!actual && !anterior) return 0
  return parseFloat(((actual - anterior) / Math.abs(anterior) * 100).toFixed(1))
}

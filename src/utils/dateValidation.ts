import { isValid, parse } from 'date-fns'

export function validarFechaString (fechaString: string): boolean {
  const fecha = parse(fechaString, 'yyyy-MM-dd', new Date())
  return isValid(fecha)
}

import { Request, Response, NextFunction } from 'express'
import { ClientError } from '../errors/ClientError'
import { validarFechaString } from '../utils/dateValidation'
export function ValidationDate (req: Request, res: Response, next: NextFunction): void {
  const { fechaInicio, fechaFin } = req.query

  // eslint-disable-next-line
  if (!fechaInicio || !fechaFin) {
    throw new ClientError('Dates required!', 401)
  }
  if (!validarFechaString(fechaInicio as string) || !validarFechaString(fechaFin as string)) {
    throw new ClientError('Invalid date(s)!', 401)
  }
  next()
}

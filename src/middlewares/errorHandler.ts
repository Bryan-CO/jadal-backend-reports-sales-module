import { Request, Response, NextFunction } from 'express'
import { ResponseModel } from '../utils/ReponseModel'
import { AppError } from '../errors/AppError'
import { ClientError } from '../errors/ClientError'
export function errorHandler (error: AppError, _req: Request, res: Response, _next: NextFunction): void {
  const statusCode = error.statusCode
  const message = error.message
  console.error(error)
  if (error instanceof ClientError) {
    ResponseModel.error({ res, statusCode, message })
  } else {
    ResponseModel.error({ res, message: 'Something went wrong! try again later' })
  }
}

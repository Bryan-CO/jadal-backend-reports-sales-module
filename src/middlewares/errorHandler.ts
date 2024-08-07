import { Request, Response, NextFunction } from 'express'
import { ResponseModel } from '../utils/ReponseModel'
import { AppError } from '../errors/AppError'
import { ClientError } from '../errors/ClientError'
import logger from '../logger/logger'

export function errorHandler (error: AppError, _req: Request, res: Response, _next: NextFunction): void {
  const statusCode = error.statusCode
  const message = error.message
  if (error instanceof ClientError) {
    ResponseModel.error({ res, statusCode, message })
  } else {
    logger.error(error.message)
    ResponseModel.error({ res, message: 'Something went wrong! try again later' })
  }
}

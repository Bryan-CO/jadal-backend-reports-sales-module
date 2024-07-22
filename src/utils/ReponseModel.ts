import { Response } from 'express'

interface ResponseOptions {
  res: Response
  data?: any
  message?: string
  statusCode?: number
}
// eslint-disable-next-line
export class ResponseModel {
  static success ({ res, data, statusCode = 200 }: ResponseOptions): void {
    res.status(statusCode).json({
      success: true,
      data
    })
  }

  static error ({ res, message, statusCode = 500 }: ResponseOptions): void {
    res.status(statusCode).json({
      success: false,
      errors: {
        message
      }
    })
  }
}

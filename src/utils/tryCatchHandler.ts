import { Request, Response, NextFunction } from 'express'
export function tryCatchHandler (controller: any): any {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

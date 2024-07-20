import { Request, Response, NextFunction } from 'express'
export function errorHandler (error: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.log('ERRORORORORO :( =', error)
  res.json({ message: ':(' })
}

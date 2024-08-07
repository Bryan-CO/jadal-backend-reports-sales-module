import { RequestHandler } from 'express'
import { ClientError } from '../errors/ClientError'

export const notFoundHandler: RequestHandler = (req, res, next) => {
  throw new ClientError('Not found!', 404)
}

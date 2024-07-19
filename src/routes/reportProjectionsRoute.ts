import { Router } from 'express'
import { ReportProjectionController } from '../controllers/reportProjectionsController'
export const reportProjectionsRoute = Router()

// eslint-disable-next-line
reportProjectionsRoute.get('/', ReportProjectionController.getAll)

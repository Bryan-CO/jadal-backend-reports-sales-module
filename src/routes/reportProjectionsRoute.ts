import { Router } from 'express'
import { ReportProjectionController } from '../controllers/reportProjectionsController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
export const reportProjectionsRoute = Router()

// eslint-disable-next-line
reportProjectionsRoute.get('/', tryCatchHandler(ReportProjectionController.getAll))

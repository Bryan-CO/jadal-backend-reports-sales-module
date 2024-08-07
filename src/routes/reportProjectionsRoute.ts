import { Router } from 'express'
import { ReportProjectionController } from '../controllers/reportProjectionsController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
import { ValidationDate } from '../middlewares/ValidationDate'
export const reportProjectionsRoute = Router()

// eslint-disable-next-line
reportProjectionsRoute.get('/', ValidationDate, tryCatchHandler(ReportProjectionController.getAll))

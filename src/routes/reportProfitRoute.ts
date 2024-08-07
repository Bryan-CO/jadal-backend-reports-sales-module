import { Router } from 'express'
import { ReportProfitController } from '../controllers/reportProfitController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
import { ValidationDate } from '../middlewares/ValidationDate'
export const reportProfileRoute = Router()

// eslint-disable-next-line
reportProfileRoute.get('/', ValidationDate, tryCatchHandler(ReportProfitController.getAll))

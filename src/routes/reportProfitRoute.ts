import { Router } from 'express'
import { ReportProfitController } from '../controllers/reportProfitController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
export const reportProfileRoute = Router()

// eslint-disable-next-line
reportProfileRoute.get('/', tryCatchHandler(ReportProfitController.getAll))

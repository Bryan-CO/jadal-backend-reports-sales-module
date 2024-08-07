import { Router } from 'express'
import { ReportComparationsController } from '../controllers/reportComparationsController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
import { ValidationDate } from '../middlewares/ValidationDate'
export const reportComparationsRouter = Router()

// eslint-disable-next-line
reportComparationsRouter.get('/', ValidationDate, tryCatchHandler(ReportComparationsController.getAll))

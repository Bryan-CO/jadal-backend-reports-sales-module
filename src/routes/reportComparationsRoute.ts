import { Router } from 'express'
import { ReportComparationsController } from '../controllers/reportComparationsController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
export const reportComparationsRouter = Router()

// eslint-disable-next-line
reportComparationsRouter.get('/', tryCatchHandler(ReportComparationsController.getAll))

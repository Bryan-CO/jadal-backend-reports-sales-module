import { Router } from 'express'
import { ReportBalanceController } from '../controllers/reportBalanceController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
import { ValidationDate } from '../middlewares/ValidationDate'
export const reportBalanceRoute = Router()

// eslint-disable-next-line
reportBalanceRoute.get('/', ValidationDate, tryCatchHandler(ReportBalanceController.getAll))

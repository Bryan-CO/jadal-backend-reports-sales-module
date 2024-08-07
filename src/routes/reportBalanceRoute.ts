import { Router } from 'express'
import { ReportBalanceController } from '../controllers/reportBalanceController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
export const reportBalanceRoute = Router()

// eslint-disable-next-line
reportBalanceRoute.get('/', tryCatchHandler(ReportBalanceController.getAll))

import { Router } from 'express'
import { ReportSalesController } from '../controllers/reportBalanceController'
import { tryCatchHandler } from '../utils/tryCatchHandler'
export const reportBalanceRoute = Router()

// eslint-disable-next-line
reportBalanceRoute.get('/', tryCatchHandler(ReportSalesController.getAll))

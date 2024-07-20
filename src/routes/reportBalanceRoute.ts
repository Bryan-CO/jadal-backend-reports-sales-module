import { Router } from 'express'
import { ReportSalesController } from '../controllers/reportBalanceController'
export const reportBalanceRoute = Router()

// eslint-disable-next-line
reportBalanceRoute.get('/', ReportSalesController.getAll)

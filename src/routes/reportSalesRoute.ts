import { Router } from 'express'
import { ReportSalesController } from '../controllers/reportSalesController'
export const reportSalesRoute = Router()

// eslint-disable-next-line
reportSalesRoute.get('/', ReportSalesController.getAll)

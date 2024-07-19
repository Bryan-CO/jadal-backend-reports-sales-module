import { Router } from 'express'
import { ReportProfitController } from '../controllers/reportProfitController'
export const reportProfileRoute = Router()

// eslint-disable-next-line
reportProfileRoute.get('/', ReportProfitController.getAll)

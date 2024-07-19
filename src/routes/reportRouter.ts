import { Router } from 'express'
import { reportProfileRoute } from './reportProfitRoute'
import { reportSalesRoute } from './reportSalesRoute'
import { reportProjectionsRoute } from './reportProjectionsRoute'
export const reportRoute = Router()
reportRoute.use('/profit', reportProfileRoute)
reportRoute.use('/sales', reportSalesRoute)
reportRoute.use('/projections', reportProjectionsRoute)

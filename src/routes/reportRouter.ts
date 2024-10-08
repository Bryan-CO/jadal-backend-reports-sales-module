import { Router } from 'express'
import { reportProfileRoute } from './reportProfitRoute'
import { reportBalanceRoute } from './reportBalanceRoute'
import { reportProjectionsRoute } from './reportProjectionsRoute'
export const reportRoute = Router()
reportRoute.use('/profit', reportProfileRoute)
reportRoute.use('/balance', reportBalanceRoute)
reportRoute.use('/projections', reportProjectionsRoute)

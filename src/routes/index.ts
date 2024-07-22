import { Router } from 'express'
import { reportRoute } from './reportRouter'
import { ValidationDate } from '../middlewares/ValidationDate'
const router = Router()

export default router.use('/report', ValidationDate, reportRoute)

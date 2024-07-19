import { Router } from 'express'
import { reportRoute } from './reportRouter'
const router = Router()

export default router.use('/report', reportRoute)

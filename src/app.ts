import express from 'express'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'
import cors from 'cors'
import { notFoundHandler } from './middlewares/notFound404'

// Variables y/o constantes
const app = express()

// Middlewares
app.use(express.json())

// POR EL MOMENTO
app.use(cors())

// Rutas
app.use('/api', routes)

app.use(notFoundHandler)
app.use(errorHandler)

// Servidor

export default app

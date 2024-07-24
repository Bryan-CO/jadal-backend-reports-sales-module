import express from 'express'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'
import cors from 'cors'

// Variables y/o constantes
const app = express()
const PORT = process.env.SERVER_PORT ?? 6969
// Middlewares
app.use(express.json())

// POR EL MOMENTO
app.use(cors())

// Rutas
app.use('/api', routes)

app.use(errorHandler)

// Servidor
app.listen(PORT, () => console.log(`App escuchando en http://localhost:${PORT}/api`))

import express from 'express'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'

// Variables y/o constantes
const app = express()
const PORT = process.env.SERVER_PORT ?? 6969
// Middlewares
app.use(express.json())

// Rutas
app.use('/api', routes)

app.use(errorHandler)

// Servidor
app.listen(PORT, () => console.log(`App escuchando en http://localhost:${PORT}/api`))

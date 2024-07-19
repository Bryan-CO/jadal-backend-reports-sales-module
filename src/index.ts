import express from 'express'
import routes from './routes'
// Variables y/o constantes
const app = express()
const PORT = process.env.PORT ?? 1234

// Middlewares
app.use(express.json())

// Rutas
app.use('/api', routes)

// Servidor
app.listen(PORT, () => console.log(`App escuchando en http://localhost:${PORT}/api`))

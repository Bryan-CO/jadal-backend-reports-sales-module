import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'

// Variables y/o constantes
const app = express()
const PORT = process.env.SERVER_PORT ?? 6969
// Middlewares
app.use(express.json())

// Rutas
app.use('/api', routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  res.status(500).json(':(')
})

// Servidor
app.listen(PORT, () => console.log(`App escuchando en http://localhost:${PORT}/api`))

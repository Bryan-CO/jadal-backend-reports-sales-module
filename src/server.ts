import { DatabaseConnection } from './database/dataConnection'
import app from './app'

const PORT = process.env.SERVER_PORT ?? 0

export const startServer = async (): Promise<void> => {
  const dbConnection = new DatabaseConnection()

  // Prueba la conexión a la base de datos
  await dbConnection.testConnection()
  // Si la conexión es exitosa, inicia el servidor
  app.listen(PORT, () => console.info(`App escuchando en http://localhost:${PORT}/api`))
}

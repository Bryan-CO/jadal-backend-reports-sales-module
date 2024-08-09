import { Pool } from 'pg'
import logger from '../logger/logger'
export class DatabaseConnection {
  con: Pool
  constructor () {
    this.con = new Pool({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    })
  }

  async testConnection (): Promise<void> {
    try {
      await this.con.connect()
      // eslint-disable-next-line
      logger.info(`${process.env.DB_DATABASE?.toUpperCase()} database connection successful`)
    } catch (err) {
      // eslint-disable-next-line
      logger.error(`${process.env.DB_DATABASE?.toUpperCase()} database connection error. Message: ${err}`)
      process.exit(1)
    }
  }
}

import { Pool } from 'pg'
export class DatabaseConnection {
  con: Pool
  constructor () {
    this.con = new Pool({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE
    })
  }
}

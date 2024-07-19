import { Pool } from 'pg'
export class DatabaseConnection {
  con: Pool
  constructor () {
    this.con = new Pool({
      user: 'postgres',
      password: 'admin',
      host: 'localhost',
      database: 'postgres'
    })
  }
}

import { Request, Response } from 'express'
import { Pool, QueryResult } from 'pg'

// eslint-disable-next-line
export class ReportProfitController {
  static async getAll (req: Request, res: Response): Promise<void> {
    const client = await new Pool({
      connectionString: 'postgres://postgres:admin@localhost:5432/postgres'
    }).connect()
    const [rs]: QueryResult[] = (await client.query('SELECT 123;')).rows
    res.send(rs)
  }
}

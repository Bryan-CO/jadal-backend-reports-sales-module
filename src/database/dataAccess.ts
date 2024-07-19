import { DatabaseConnection } from './dataConnection'

export class DataAcess {
  private readonly dbConnection: DatabaseConnection
  constructor (dbConnection: DatabaseConnection) {
    this.dbConnection = dbConnection
  }

  async executeProcedure ({ nameProcedure, parameters }: { nameProcedure?: string, parameters?: any[] }): Promise<any> {
    const result = (await this.dbConnection.con.query('SELECT * FROM UTILIDADES;')).rows
    return result
  }
}

import pg, { Pool, QueryResult } from "pg"
import { BadRequestError } from "./errors"

const pool: Pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
})

export const fetchAll = async (SQL: string, params: any[]): Promise<any> => {
  const client = await pool.connect()

  try {
    return (await client.query(SQL, params)).rows
  } catch (error) {
    if (error instanceof Error) {
      return new BadRequestError(error.message)
    }
  } finally {
    client.release()
  }
}

import { IAdminRow } from "../types/admin"
import { fetchAll } from "../utils/pg"

const adminLoginQuery = `
  SELECT username, password
  FROM "public"."admins"
  WHERE username = $1 AND password = crypt($2, gen_salt(${process.env.GEN_SALT})
`
async function login(username: string, password: string): Promise<IAdminRow> {
  const res: IAdminRow = await fetchAll(adminLoginQuery, [username, password])
  console.log(res)
  return res
}

export default {
  login,
}

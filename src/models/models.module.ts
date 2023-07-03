import { fetchAll } from "../utils/pg"

const modelAllGetQuery = `
  SELECT *
  FROM models
`
async function login() {
  return await fetchAll(modelAllGetQuery, [])
}

export default {
  login,
}

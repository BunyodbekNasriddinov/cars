import jwt, { Secret } from "jsonwebtoken"

const SECRET_KEY: any = process.env.SECRET_KEY

export default {
  sign: (payload: any) => jwt.sign(payload, SECRET_KEY),
  verify: (token: string) => jwt.verify(token, SECRET_KEY),
}

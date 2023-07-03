import { NextFunction } from "express"
import { IRequest, IResponse } from "../types"
import jwt from "../utils/jwt"
import { AuthorizationError, InternalServerError } from "../utils/errors"

export default (req: IRequest, res: IResponse, next: NextFunction) => {
  try {
    if (!req.headers?.token)
      return next(new AuthorizationError("Token required"))

    if (jwt.verify(req.headers?.token)) {
      res.id = Number(jwt.verify(req.headers?.token))
      return next()
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(new InternalServerError(error.message))
    }
  }
}

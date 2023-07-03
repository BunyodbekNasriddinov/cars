import { NextFunction, Request, Response } from "express"
import { IError } from '../types/index';

export default (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    if (err.status !== 500) {
      return res
        .status(err.status)
        .json({ status: err.status, name: err.name, message: err.message })
    }

    if (process.env.NODE_ENV === "development") {
      return res
        .status(500)
        .json({ status: 500, name: err.name, message: err.message })
    }

    res
      .status(500)
      .json({ status: 500, name: err.name, message: "InternalServerError" })
  }
}

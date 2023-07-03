import { NextFunction, Response } from "express"
import { BadRequestError } from "../utils/errors"
import upload from "../utils/uploads"
import { IRequest } from "../types/index"

export default (req: IRequest, res: Response, next: NextFunction) => {
  return upload.single("image")(req, res, (err) => {
    if (err) {
      return next(new BadRequestError(err.message))
    } else {
      if (req.fileFormatter) {
        return next(new BadRequestError(req.fileFormatter))
      } else {
        return next()
      }
    }
  })
}

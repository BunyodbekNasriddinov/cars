import { Request, Response, NextFunction } from "express"
import { BadRequestError } from "../utils/errors"
import adminModule from "../models/admin.module"
import { IAdminRow } from "../types/admin"
import jwt from "../utils/jwt"

async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body 

  const admin: IAdminRow = (await adminModule.login(username, password))
  console.log(admin);
  
  try {
    
    if (admin instanceof BadRequestError) {
      return next(new BadRequestError(admin.message))
    }

    if (!admin.usename) {
      return next(new BadRequestError("Username or password invalid"))
    }

    res.status(200).json({
      status: 200,
      message: "logged",
      data: jwt.sign({ admin_id: Number(admin.id) }),
    })
  } catch (error) {
    if (error instanceof Error) {
      return next(new BadRequestError(error.message))
    }
  }
}

export default {
  login,
}

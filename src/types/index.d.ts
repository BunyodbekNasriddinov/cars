import { Request, Response } from "express"
import { DiskStorageOptions } from "multer"

export interface IRequest extends Request {
  fileFormatter: string
  headers: {
    token: string
  }
}

export interface IResponse extends Response {
  id: number
}

export interface IError extends Error {
  name: string
  status: number
  message: string
}

import { Request } from "express"
import { DiskStorageOptions } from "multer"

export interface IRequest extends Request {
  fileFormatter: string
}

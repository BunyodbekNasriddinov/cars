import multer from "multer"
import { resolve } from "path"

export default multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, resolve("uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname
      cb(null, file.fieldname + "-" + uniqueSuffix)
    },
  }),

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})

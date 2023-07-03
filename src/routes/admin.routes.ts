import { Router } from "express"
import adminController from "../controllers/admin.controller"

const router = Router()

router.post("/admin", adminController.login)

export default router

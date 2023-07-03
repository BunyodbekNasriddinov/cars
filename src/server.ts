import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv"

import allRoutes from './routes/all.routes'

import errorHandler from './middlewares/errorHandler'

const app: Application = express()

dotenv.config()
app.use(cors())
app.use(express.json())

const PORT: number = Number(process.env.PORT) || 5001

// all routes
app.use(allRoutes)

// error handler
// app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running port: ${PORT}`))

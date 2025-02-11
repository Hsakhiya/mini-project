import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import MenuRouter from './routes/menuRouter.js'
import connectDB from './config/connectdb.js'

const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL


app.use(cors())

connectDB(DATABASE_URL)

app.use(express.json())


app.use('/api',MenuRouter)



app.listen(port,()=>console.log(`Listening on ${port}`))
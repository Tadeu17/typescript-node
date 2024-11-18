import express, { Request, Response, NextFunction } from "express"
import BodyParser from 'body-parser'


import todoRoutes from './routes/todos.js'

const app = express()

app.use(BodyParser.json())

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message })
})

app.listen(4000, () => console.log('Im running'));

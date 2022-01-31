import cors from 'cors'
import express from 'express'

import healthRouter from './routers/healthRouter.js'
import participantsRouter from './routers/participantsRouter.js'
import messagesRouter from './routers/messagesRouter.js'
import statusRouter from './routers/statusRouter.js'

import backMiddlewareError from './middlewares/backMiddlewareError.js'
import serverMiddlewareError from './middlewares/serverMiddlewareError.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/health', healthRouter)
app.use('/participants', participantsRouter)
app.use('/messages', messagesRouter)
app.use('/status', statusRouter)

app.use(backMiddlewareError)
app.use(serverMiddlewareError)


export default app

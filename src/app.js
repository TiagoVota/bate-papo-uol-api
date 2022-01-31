import cors from 'cors'
import express from 'express'

import * as statusController from './controllers/statusController.js'

import healthRouter from './routers/healthRouter.js'
import participantsRouter from './routers/participantsRouter.js'
import messagesRouter from './routers/messagesRouter.js'
import statusRouter from './routers/statusRouter.js'

import backMiddlewareError from './middlewares/backMiddlewareError.js'
import serverMiddlewareError from './middlewares/serverMiddlewareError.js'


const MILLISECONDS = 1000

const app = express()

app.use(cors())
app.use(express.json())

setInterval(statusController.disconnectParticipants, 1 * MILLISECONDS)

app.use('/health', healthRouter)
app.use('/participants', participantsRouter)
app.use('/messages', messagesRouter)
app.use('/status', statusRouter)

app.use(backMiddlewareError)
app.use(serverMiddlewareError)


export default app

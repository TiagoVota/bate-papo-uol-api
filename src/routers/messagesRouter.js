import { Router } from 'express'

import * as messagesController from '../controllers/messagesController.js'


const router = new Router()

router.get('', messagesController.getMessages)

// router.post('', messagesController.controllerFunction)


export default router

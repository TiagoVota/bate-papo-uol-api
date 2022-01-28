import { Router } from 'express'

import * as participantsController from '../controllers/participantsController.js'


const router = new Router()

router.get('', participantsController.controllerFunction)

router.post('', participantsController.controllerFunction)


export default router

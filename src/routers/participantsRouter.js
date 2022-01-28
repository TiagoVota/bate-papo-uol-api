import { Router } from 'express'

import * as participantsController from '../controllers/participantsController.js'


const router = new Router()

// router.get('', participantsController.getParticipants)

router.post('', participantsController.addParticipant)


export default router

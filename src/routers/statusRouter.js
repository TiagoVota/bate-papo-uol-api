import { Router } from 'express'

import * as statusController from '../controllers/statusController.js'


const router = new Router()

router.post('', statusController.keepUserAlive)


export default router

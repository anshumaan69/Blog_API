import {Router} from 'express'
import { Healthcheck } from '../controllers/healthcheckController.js'


const router = Router()

router.route("/").get(Healthcheck)

export default router
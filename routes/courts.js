import { Router } from 'express'
import * as courtsCtrl from '../controllers/courts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/courts/new
router.get('/new', courtsCtrl.new)
//POST localhost:3000/courts
router.post('/',isLoggedIn, courtsCtrl.create)

export {
  router
}
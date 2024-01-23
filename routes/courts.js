import { Router } from 'express'
import * as courtsCtrl from '../controllers/courts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/courts/new
router.get('/new', courtsCtrl.new)
//POST localhost:3000/courts
router.post('/',isLoggedIn, courtsCtrl.create)
//Post localhost:3000/courts/:courtId/comments
router.post('/:courtId/comments', isLoggedIn, courtsCtrl.createComment)

export {
  router
}
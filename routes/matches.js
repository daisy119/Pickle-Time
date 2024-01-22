import { Router } from 'express'
import * as matchesCtrl from '../controllers/matches.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//Get localhost:3000/matches
router.get('/', matchesCtrl.index)
//Get localhost:3000/matches/new
router.get('/new', matchesCtrl.new)
//POST localhost:3000/matches/

//POST localhost:3000/matches
router.post('/', isLoggedIn, matchesCtrl.create)


export {
  router
}
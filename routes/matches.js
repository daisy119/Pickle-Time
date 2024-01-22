import { Router } from 'express'
import * as matchesCtrl from '../controllers/matches.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//Get localhost:3000/matches
router.get('/', matchesCtrl.index)
//Get localhost:3000/matches/new
router.get('/new', matchesCtrl.new)
//GET localhost:3000/matches/:matchId
router.get('/:matchId', matchesCtrl.show)
//GET localhost:3000/matches/:matchId/edit
router.get('/:matchId/edit', isLoggedIn, matchesCtrl.edit)
//POST localhost:3000/matches
router.post('/', isLoggedIn, matchesCtrl.create)
//PATCH localhost:3000/matches/:matchId/flipFav
router.patch('/:matchId/flipFav', isLoggedIn, matchesCtrl.flipFav)

export {
  router
}
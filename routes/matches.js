import { Router } from 'express'
import * as matchesCtrl from '../controllers/matches.js'

const router = Router()

//Get localhost:3000/matches
router.get('/', matchesCtrl.index)
//Get localhost:3000/matches/new
router.get('/new', matchesCtrl.new)

export {
  router
}
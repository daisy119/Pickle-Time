import { Match } from '../models/match.js'

function index(req, res) {
  Match.find({})
  .then(matches =>{
    res.render('matches/index', {
      matches: matches,
      title:"Current Schedule📝"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newMatch(req,res) {
  res.render("matches/new", {
    title: "Add Match",
  })
}

function create(req,res) {
  console.log(req.user)
  req.body.owner = req.user.profile._id
  req.body.fav = !!req.body.fav
  Match.create(req.body)
  .then(match =>{
    res.redirect('/matches')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/matches')
  })
}

function show(req,res) {
  Match.findById(req.params.matchId)
  .populate("owner")
  .then(match =>{
    res.render('matches/show', {
      match: match,
      title: "Schedule Detail",
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/matches')
  })
}

export {
  index,
  newMatch as new,
  create,
  show,
}
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
  req.body.fav = !!req.body.fav
  Match.create(req.body)
  .then(match =>{
    res.redirect('/matches/new')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/matches/new')
  })
}

export {
  index,
  newMatch as new,
  create,
}
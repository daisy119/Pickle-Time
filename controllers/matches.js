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
  // console.log(req.user)
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
    console.log(match.durationHr)
    console.log(match.owner)
    res.render('matches/show', {
      match: match,
      title: "🔍Match Schedule Detail",
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/matches')
  })
}

function flipFav(req,res) {
  Match.findById(req.params.matchId)
  .then(match =>{
    match.fav =!match.fav
    match.save()
    .then(()=>{
      res.redirect(`/matches/${match._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/matches')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/matches')
  })
}

function edit(req,res) {
  Match.findById(req.params.matchId)
  .then(match => {
   res.render('matches/edit', {
    match: match,
    title:"✍️Edit a Match Schedule"
   })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/matches')
  })
}

function update(req,res) {
  Match.findById(req.params.matchId)
  .then(match =>{
    if(match.owner.equals(req.user.profile._id)) {
      req.body.fav = !!req.body.fav
      match.updateOne(req.body)
      .then(()=> {
        res.redirect(`/matches/${match._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/matches')
      })
    }else {
      throw new Error('❌Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/matches')
  })
}

function deleteMatch(req,res) {
  Match.findById(req.params.matchId)
  .then(match =>{
    if(match.owner.equals(req.user.profile._id)) {
      match.deleteOne()
      .then(() =>{
        res.redirect('/matches')
      })
    } else {
      throw new Error ('❌Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/matches')
  })
}

export {
  index,
  newMatch as new,
  create,
  show,
  flipFav,
  edit,
  update,
  deleteMatch as delete,
}
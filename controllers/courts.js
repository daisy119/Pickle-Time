import { Court } from '../models/court.js'

function newCourt(req, res) {
  Court.find({}).sort('name')
  .then(courts =>{
    res.render('courts/new', {
      title:'Add a Court',
      courts: courts,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courts")
  })
}

function create(req,res) {
  req.body.owner = req.user.profile._id
  Court.create(req.body)
  .then(court =>{
    res.redict('/courts/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courts/new")
  })
}

function show(req,res) {
  Court.findById(req.params.courtId)
  .then(court =>{
    res.render('courts/show', {
      court,
      title: "Court details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courts")
  })
}

function createComment(req,res) {
  Court.findById(req.params.courtId)
  .then(court =>{
    court.comments.push(req.body)
    court.save()
    .then(() => {
      console.log(court.comments)
      res.redirect(`/courts/${court._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/courts')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courts')
  })
}

function edit(req,res) {
  Court.findById(req.params.courtId)
  .then(court =>{
    res.render("courts/edit", {
      court:court,
      title:"Edit a Court"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courts')
  })
}

function update(req,res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Court.findByIdAndUpdate(req.params.courtId, req.body,{new:true})
  .then(court =>{
    res.redirect(`/courts/${court._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courts')
  })
}

export {
  newCourt as new,
  create,
  createComment,
  show,
  edit,
  update,
}
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

function createComment(req,res) {
  Court.findById(req.params.courtId)
  .then(court =>{
    console.log(req.body)
    court.comments.push(req.body)
    court.save()
    console.log(court.comments)
    .then(() => {
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


export {
  newCourt as new,
  create,
  createComment,
}
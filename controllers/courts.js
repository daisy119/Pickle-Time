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
  Court.create(req.body)
  .then(court =>{
    res.redict('/courts/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courts/new")
  })
}

export {
  newCourt as new,
  create,
}
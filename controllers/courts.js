import { Court } from '../models/court.js'

function newCourt(req, res) {
  Court.find({})
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

export {
  newCourt as new,
}
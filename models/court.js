import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  rating: {type: Number, min:1, max:5, default:3},
}, {
  timestamps: true
})

const courtSchema = new Schema({
  name: {type: String, required: true},
  location: String,
  phoneNumber: String,
  comments: [commentSchema],
}, {
  timestamps: true
})

const Court = mongoose.model('Court', courtSchema)

export {
  Court
}
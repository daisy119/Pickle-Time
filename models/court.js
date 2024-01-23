import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  commentId: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const courtSchema = new Schema({
  name: {type: String, required: true},
  location: String,
  phoneNumber: String,
  // author: [commentSchema]
}, {
  timestamps: true
})

const Court = mongoose.model('Court', courtSchema)

export {
  Court
}
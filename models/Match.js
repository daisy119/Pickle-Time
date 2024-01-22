import mongoose from 'mongoose'

const Schema = mongoose.Schema

const matchSchema = new Schema({
  date: Date,
  duration: String,
  friends: String,
  courtId: {type: Schema.Types.ObjectId, ref: "Court"},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Match = mongoose.model('Match', matchSchema)

export {
  Match
}
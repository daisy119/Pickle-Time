import mongoose from 'mongoose'

const Schema = mongoose.Schema

const matchSchema = new Schema({
  date: Date,
  durationHr: Number,
  friends: String,
  fav: Boolean,
  // courtId: {type: Schema.Types.ObjectId, ref: "Court"},
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  courtId: String,
  owner: String,
}, {
  timestamps: true
})

const Match = mongoose.model('Match', matchSchema)

export {
  Match
}
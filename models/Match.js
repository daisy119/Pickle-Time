import mongoose from 'mongoose'

const Schema = mongoose.Schema

const matchSchema = new Schema({
  date: Date,
  durationHr: Number,
  friends: String,
  fav: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  courtId: String,
}, {
  timestamps: true
})

const Match = mongoose.model('Match', matchSchema)

export {
  Match
}
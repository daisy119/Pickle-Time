import mongoose from 'mongoose'

const Schema = mongoose.Schema

const matchSchema = new Schema({
  date: {
    type: Date,
    default: function() {
      const currentYearDate = new Date(currentDate)
      return currentYearDate
    },
  },
  durationHr: {
    type: Number,
    min: 1,
  },
  friends: String,
  fav: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  // courtId: String,
}, {
  timestamps: true
})

const Match = mongoose.model('Match', matchSchema)

export {
  Match
}
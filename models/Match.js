import mongoose from 'mongoose'

const Schema = mongoose.Schema

const matchSchema = new Schema({
  date: {
    type: Date,
    default: function() {
      const currentDate = new Date();
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() +1 );
      return nextDay
    },
  },

  durationHr: {
    type: Number,
    min: 1,
  },
  friends: String,
  courts:[{type: Schema.Types.ObjectId, ref: 'Court'}],
  fav: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Match = mongoose.model('Match', matchSchema)

export {
  Match
}
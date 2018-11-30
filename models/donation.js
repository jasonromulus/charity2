const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donation = mongoose.model('Donation', {
  date: Date,
  amount: Number,
  notes: String,
  charityId: { type: Schema.Types.ObjectId, ref: 'Charity'}
});

module.exports = donation
const mongoose = require('mongoose');

const charity = mongoose.model('Charity', {
  organization: String
})

module.exports = charity
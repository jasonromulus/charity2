const mongoose = require('mongoose');

const charity = mongoose.model('Charity', {
  name: String
})

module.exports = charity
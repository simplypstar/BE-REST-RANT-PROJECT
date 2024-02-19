const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: { type: String, default: '../chefs-hat-1588125_1280.png' },
  cuisines: { type: String, required: true },
  city: {type: String, default: 'Anytown'},
  state: {type: String,default: 'USA'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

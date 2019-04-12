const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  analytics: {
    ipAddressses: [{}],
    productsReaded: [{}],
    bacodesFailed: [{}],
    querySeraches: [{}],
    productsViewed: [{}],
  },
  username: String,
  email: String,
  devices: [{
    _id: Schema.Types.ObjectId,
    manufacturer: String,
    brand: String,
    model: String,
    carrier: String,
    platform: String,
    systemVersion: String,
    appVersion: String,
  }],
}, {
  collection: 'col',
})

module.exports = mongoose.model('user', userSchema)

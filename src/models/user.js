const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  analytics: {
    ipAddressses: [{
      _id: Schema.Types.ObjectId,
      ipAddress: String,
      date: Date,
    }],
    productsReaded: [{}],
    bacodesFailed: [{
      _id: Schema.Types.ObjectId,
      barcode: String,
      date: Date,
    }],
    querySeraches: [{}],
    productsViewed: [{
      _id: Schema.Types.ObjectId,
      product: Schema.Types.ObjectId,
      origin: String,
      date: Date,
    }],
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

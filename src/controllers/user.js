const User = require('../models/user')

module.exports = {
  index: async (req, res, next) => {
    try {
      const users = await User.find({})
      res.status(200).json(users)
    } catch (err) {
      throw new Error(err)
    }
  },
  getBrand: async (req, res, next) => {
    try {
    } catch (err) {
      throw new Error(err)
    }
  },
}

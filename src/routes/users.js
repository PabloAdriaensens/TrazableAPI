const express = require('express')
const router = express.Router()

const {
  index,
  getBrand,
} = require('../controllers/user')

router.get('/', index)

router.get('/devices', getBrand)

module.exports = router

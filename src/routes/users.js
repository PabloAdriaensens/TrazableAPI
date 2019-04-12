const express = require('express')
const router = express.Router()

const {
  index,
  getBrand,
  getProductsViewed,
} = require('../controllers/user')

router.get('/', index)

router.get('/devices', getBrand)

router.get('/productsViewed', getProductsViewed)

module.exports = router

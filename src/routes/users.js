const express = require('express')
const router = express.Router()

const {
  index,
  getBrand,
  getProductsViewed,
  getProductsScanned,
} = require('../controllers/user')

router.get('/', index)

router.get('/devices', getBrand)

router.get('/productsViewed', getProductsViewed)

router.get('/productsScanned', getProductsScanned)

module.exports = router

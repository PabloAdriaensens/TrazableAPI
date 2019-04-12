const express = require('express')
const router = express.Router()

const {
  index,
  getBrand,
  getProductsViewed,
  getProductsScanned,
  getProductsFailed,
} = require('../controllers/user')

router.get('/', index)

router.get('/devices', getBrand)

router.get('/productsViewed', getProductsViewed)

router.get('/productsScanned', getProductsScanned)

router.get('/productsFailed', getProductsFailed)

module.exports = router

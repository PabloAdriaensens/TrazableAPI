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
    const results = await User.aggregate([{
      '$group': {
        _id: '$devices.brand',
        total: {
          $sum: 1,
        },
      },
    }])

    const resp = results.map((r) => {
      const brand = r._id[0] || ''
      const total = r.total

      return {
        brand,
        total,
      }
    })

    res.status(200).json(resp)
  },

  getProductsViewed: async (req, res, next) => {
    const results = await User.aggregate([{
      $unwind: '$analytics',
    },
    {
      $unwind: '$analytics.productsViewed',
    },
    {
      $group: {
        _id: '$analytics.productsViewed.product',
        total: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        'total': -1,
      },
    },
    {
      $limit: 10,
    },
    ])

    return res.status(200).json(results)
  },
}

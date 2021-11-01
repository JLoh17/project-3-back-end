const { Router } = require('express')
const router = Router ()

// Auth
router.post('/auth/signup', require('../controllers/api/auth/signup'))
router.post('/auth/login', require('../controllers/api/auth/login'))
router.delete('/auth/logout', require('../controllers/api/auth/logout'))

// Public products
router.get('/products'), require('../controllers/api/products/index')
router.get('/products/:id'), require('../controllers/api/products/show')

// My orders - for payment
router.get('/my/orders', require('../controllers/api/my/orders'))
router.post('/my/orders', require('../controllers/api/my/orders'))
router.delete('/my/orders', require('../controllers/api/my/orders'))
router.post('/my/orders/:id/pay', require('../controllers/api/my/pay'))
router.put('/my/orders', require('../controllers/api/my/orders'))


// Cart item - adding items to cart
router.get('/my/cart', require('../controllers/api/my/cart'))
router.post('/my/cart', require('../controllers/api/my/cart'))
router.put('/my/cart', require('../controllers/api/my/cart'))


// My Profile's Order History - Jon lee




// Admin Orders - Jon Lee





// Error Response
router.use(function (req, res) {
  res.status(404).json({ message: "Sorry! not exist!" })
})

module.exports = router

const { Router } = require('express')
const router = Router ()

// Auth
router.post('/auth/signup', require('../controllers/api/auth/signup'))
router.post('/auth/login', require('../controllers/api/auth/login'))
router.delete('/auth/logout', require('../controllers/api/auth/logout'))

// Public products
router.get('/products'), require('../controllers/api/products') // no need to write index if already in the path
router.get('/products/:id'), require('../controllers/api/products/show')

// My orders - for payment
// router.get('/my/orders', require('../controllers/api/my/orders/index'))
// router.post('/my/orders/new', require('../controllers/api/my/orders/new')) // not sure if need this?
// router.put('/my/orders', require('../controllers/api/my/orders/update'))
// router.delete('/my/orders/:id', require('../controllers/api/my/orders/destroy'))
// router.get('/my/orders/:id', require('../controllers/api/my/orders/show'))
// router.put('/my/orders/:id/pay', require('../controllers/api/my/orders/pay'))


// Cart item - adding items to cart
// router.get('/my/cart', require('../controllers/api/my/cart'))
// router.post('/my/cart', require('../controllers/api/my/cart/new'))
// router.put('/my/cart', require('../controllers/api/my/cart/update'))


// My Profile's Order History - Jon lee
// router.put('/my/profile', require('../controllers/api/my/profile/update'))


// Admin Orders - Jon Lee
// router.get('/admin/orders', require('../controllers/api/admin/orders'))
// router.put('/admin/orders/:id', require('../controllers/api/admin/orders/update'))



// Error Response
router.use(function (req, res) {
  res.status(404).json({ message: "Sorry! Does not exist!" })
})

module.exports = router

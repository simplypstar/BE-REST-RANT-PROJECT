const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// ADD New Places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '../images/chefs-hat-1588125_1280.png'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router

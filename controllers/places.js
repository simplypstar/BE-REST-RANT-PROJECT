const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// GET /places
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch((err) => {
    console.log(err)
    res.render('error404')
  // res.render('places/index', { places })
  res.send('GET /places stub')
})
})

// POST new Place
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// ADD New Places
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET a Place by its id number
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})



// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   db.Place.findById(req.params.id)
//   .then(place=> {
//     res.render('places/show', { place })
//   })
//   .catch(err => {
//     console.log('err ', err)
//     res.render('error404')
//   })
// })


// PUT an Edited Place by its id number
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    // Dig into req.body and make sure data is valid
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

    // Save the new data into places[id]
    // places[id] = req.body
    // res.redirect(`/places/${id}`)
    res.send('PUT /places/:id stub')
  }
})


// DElETE a Place by its id number
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places') // Redirect to the index of places
  }
})


// Edit a Place
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
    res.render('places/edit', { place: places[id] })
    //res.send('GET edit form stub')
  }
)

// Add comments to a Place
router.post('/:id/rant', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    // places[id].rants.push(req.body)
    // res.redirect(`/places/${id}`)
    res.send('POST /places/:id/rant stub')
  }
})

// Delete a comment from a Place
router.delete('/:id/rant/:rantId', (req, res) => {
  let id = Number(req.params.id)
  let rantId = Number(req.params.rantId)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else if (isNaN(RTCDataChannelEventId)) {
    res.render('error404')
  }
  else if (!places[id].rants[rantId]) {
    res.render('error404')
  }
  else {
    // places[id].rants.splice(rantId, 1)
    // res.redirect(`/places/${id}`)
    res.send('DELETE /places/:id/rant/:rantId stub')
  }
})

module.exports = router


// imports 
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.entries.index)
router.get('/:id', ctrl.entries.show)
router.post('/', ctrl.entries.create)
router.put('/:id', ctrl.entries.update)
router.delete('/:id', ctrl.entries.destroy)


//exports
module.exports = router
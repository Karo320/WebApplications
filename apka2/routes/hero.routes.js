const express = require('express')
const router = express.Router()
const heroController =   require('../controller/hero.controller');
// Retrieve all heroes
router.get('/', heroController.findAll);
// Create a new hero
router.post('/', heroController.create);
// Retrieve a single hero with id
router.get('/:id', heroController.findById);
// Update a hero with id
router.put('/:id', heroController.update);
// Delete a hero with id
router.delete('/:id', heroController.delete);
//'/user/:userId'
router.get('/search/:name',heroController.getByName)
module.exports = router

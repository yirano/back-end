const router = require('express').Router();

const Users = require('./users-model.js');
const { restart } = require('nodemon');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.send(error);
        })
});

router.get('/:id/stories', (req, res) => {
    const { id } = req.params;
    Users.findStories(id) 
        .then(stories => {
            if (stories.length) {
                res.status(201).json(stories)
            } else {
                res.status(404).json({message: "Could not retrieve stories"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get stories"})
        })
})

module.exports = router;
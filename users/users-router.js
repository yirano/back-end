const router = require('express').Router();

const Users = require('./users-model.js');
const { restart } = require('nodemon');


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

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Users.remove(id) 
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted user"})
            } else {
                res.status(404).json({message: "Could not find user with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete user"})
        })
});


module.exports = router;
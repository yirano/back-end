const router = require('express').Router();

const Photos = require('./photos-model.js');
const Stories = require('../stories/stories-model.js');


router.get('/:id', (req, res) => {
    const {id} = req.params;

    Photos.findBy(id)
        .then(photo => {
            if (photo) {
                res.status(200).json(photo);
            } else {
                res.status(404).json({message: "Could not retrieve photo with give id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get photo"})
        })
});

router.post('/', (req, res) => {
    const photoInfo = req.body;

    Photos.add(photoInfo)
        .then(photo => {
            res.status(201).json(photo);
        })
        .catch(error => {
            res.status(500).json({message: "Failed to add photo"})
        })
});

router.put('/:id', (req, res) => {
    const photoUpdates = req.body;
    const {id} = req.params;

    Photos.findBy(id)
        .then(photo => {
            if(photo) {
                Photos.update(photoUpdates, id)
                    .then(updatedPhoto => {
                        res.json(updatedPhoto);
                    });
            } else {
                res.status(404).json({message: "Could not find photo with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to update photo"})
        })
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Photos.remove(id) 
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted photo"})
            } else {
                res.status(404).json({message: "Could not find photo with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete photo"})
        })
});

module.exports = router;
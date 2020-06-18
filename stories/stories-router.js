const router = require('express').Router();

const Stories = require('./stories-model.js');

router.get('/', (req, res) => {
    Stories.find()
        .then(stories => {
            res.status(200).json(stories);
        })
        .catch(error => {
            res.send(error)
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Stories.findBy(id)
        .then(story => {
            if (story) {
                res.status(200).json(story);
            } else {
                res.status(404).json({message: "Could not retrieve story with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get story"})
        })
});

router.post('/', (req, res) => {
    const storyInfo = req.body;

    Stories.add(storyInfo)
        .then(story => {
            res.status(201).json(story);
        })
        .catch(error => {
            res.status(500).json({message: "Failed to add new story"})
        })
});

router.put('/:id', (req, res) => {
    const storyUpdates = req.body;
    const {id} = req.params;

    Stories.findBy(id)
        .then(story => {
            if(story) {
                Stories.update(storyUpdates, id)
                    .then(updatedStory => {
                        res.json(updatedStory);
                    });
            } else {
                res.status(404).json({message: "Could not find story with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to update story"})
        })
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Stories.remove(id) 
        .then(deleted => {
            if (deleted) {
                res.json({message: "deleted story"})
            } else {
                res.status(404).json({message: "Could not find story with given id"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to delete story"})
        })
});


module.exports = router;
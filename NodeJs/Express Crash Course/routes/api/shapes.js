const shapes = require('../../shapes');
const express = require('express');
const router = express.Router();



//Get All shapes
router.get('/', (req, res) => res.json(shapes));

//Getting single member
router.get('/:name', (req, res) => {

    const found = shapes.some(shapes => shapes.name === req.params.name);

    if(found) {
        res.json(shapes.filter(shapes => shapes.name === req.params.name));
    } else {
        res.status(400).json({ msg: "Shape Not Found"});
    }
})


router.post('/', (req, res) => {

    const newShape = {
        name: req.body.name,
        vertices: req.body.vertices,
    }

    shapes.push(newShape);
    res.json(shapes);
})

module.exports = router;
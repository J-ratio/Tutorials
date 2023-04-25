const shapes = require('../../shapes');
const express = require('express');
const router = express.Router();



//Get All shapes
router.get('/', (req, res) => res.json(shapes));

//Getting a shape
router.get('/:name', (req, res) => {

    const found = shapes.some(shapes => shapes.name === req.params.name);

    if(found) {
        res.json(shapes.filter(shapes => shapes.name === req.params.name));
    } else {
        res.status(400).json({ msg: "Shape Not Found"});
    }
})


//Add a shape
router.post('/', (req, res) => {

    const newShape = {
        name: req.body.name,
        vertices: req.body.vertices,
    }

    if(!newShape.name || !newShape.vertices) {
        return res.status(400).json( { message: "Please include a shape name and vertices."} )
    }

    shapes.push(newShape);
    //res.json(shapes);
    res.redirect('/');
})


//Update a shape
router.put('/:name', (req, res) => {

    const found = shapes.some(shapes => shapes.name === req.params.name);

    if(found) {
        const updatedShape = req.body;
        shapes.forEach( shape => { 
            if(shape.name === req.params.name) {
                shape.name = updatedShape.name ? updatedShape.name : shape.name;
                shape.vertices = updatedShape.vertices ? updatedShape.vertices : shape.vertices;

                res.json({ message: `Shape Updated`, shape})
            }
        });
    }
})


//Deleting a shape
router.get('/:name', (req, res) => {

    const found = shapes.some(shapes => shapes.name === req.params.name);

    if(found) {
        res.json({message: "Shape Deleted", shapes: shapes.filter(shape => shape.name !== req.params.name)});
    } else {
        res.status(400).json({ msg: "Shape Not Found"});
    }
})

module.exports = router;
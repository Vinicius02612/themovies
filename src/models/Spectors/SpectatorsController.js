const express = require('express');
const router = express.Router();

const Spectators = require('./ModelSpectators');
const ModelMovies = require('../Movies/ModelMovies')

//listando espectadores...
router.get("/spectators", (req, res) =>{
    Spectators.findAll({include:[{model:ModelMovies}]}).then(spectators =>{
        res.json({spectators:spectators})
    })
});


//cadastrando espectadores...
router.post("/spectators/save", (req, res) =>{
    var name = req.body.name;
    var email = req.body.email;
    var MovieId = req.body.MovieId;

    Spectators.create({
        name:name,
        email:email,
        MovieId:MovieId
    }).then(()=>{
        res.redirect("/spectators")
    })
})

module.exports = router


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
    if(email != undefined){
        Spectators.create({
            name:name,
            email:email,
            MovieId:MovieId
        }).then(()=>{
            res.redirect("/spectators")
        })

    }else{
        res.render("usuario ja cadastrado!!")
    }
});

//rota pra prucuar todos os filmes que os specatadores
router.get("/movies/assitidos" , (req, res) =>{
    
    Spectators.findAll({
        include:[{
            model:ModelMovies,
            where:{status:1}
        }]
    }).then(moives =>{
        res.json({moives:moives})
    })

    
});

module.exports = router


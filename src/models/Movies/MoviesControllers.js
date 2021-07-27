const express = require('express');
const { route } = require('../Spectors/SpectatorsController');
const router = express.Router();

const Movies = require('./ModelMovies');


//listando filmes cadastrados...
router.get("/movies" , (req, res) =>{
        Movies.findAll().then(movies =>{
            res.json({movies:movies})
        })
});

//cadastrando filmes...
router.post("/movies/save", (req, res) =>{
    var title = req.body.title;
    var description = req.body.description;
    var yaer_manufacture = req.body.yaer_manufacture;

    Movies.create({
        title:title,
        description:description,
        yaer_manufacture:yaer_manufacture
    }).then(()=>{
        res.redirect("/movies")
    })
})


module.exports = router;
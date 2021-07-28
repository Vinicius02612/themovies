const express = require('express');
 
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
    var id = req.body.id
    var title = req.body.title;
    var description = req.body.description;
    var year_manufacture = req.body.year_manufacture;
    var status = req.body.status

    if(id != undefined){
        Movies.create({  
            title:title,
            description:description,
            year_manufacture:year_manufacture,
            status:status
        }).then(()=>{
            res.redirect("/movies")
        })
    }else{
        console.log("filme ja cadastrado!")
    }

   
});


module.exports = router;
const express = require('express');
const app = express();
const connection = require('../src/dbconfig/dbconfig');

const ModelMovies = require('../src/models/Movies/ModelMovies');
const ModelSpactators = require('../src/models/Spectors/ModelSpactators')


const spactators = require('../src/models/Spectors/SpactatorsController');
const Movies = require('../src/models/Movies/MoviesControllers');


app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//conectando ao banco de dados
connection
        .authenticate()
        .then( ()=>{
              console.log("connection made successfully...")
        }).catch((error)=>{
              console.log(error)
        });  



app.use("/", spactators);
          
app.use("/", (req, res) =>{
        res.send("Hello my friends...");
});



app.listen(8080 ,()=>{
    console.log('Server started...');
})
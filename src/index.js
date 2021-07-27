const express = require('express');
const app = express();
const connection = require('../src/dbconfig/dbconfig');

const ModelMovies = require('../src/models/Movies/ModelMovies');
const ModelSpactators = require('./models/Spectors/ModelSpectators')


const spectators = require('./models/Spectors/SpectatorsController');
const Movies = require('../src/models/Movies/MoviesControllers');


//app.use(express.static('public'));

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



app.use("/", spectators);
app.use("/", Movies);

          




app.listen(8080 ,()=>{
    console.log('Server started...');
})
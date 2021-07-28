const Sequelize = require('sequelize');
const connection = require('../../dbconfig/dbconfig');

//criando tabelas de filmes...
const Movies = connection.define('Movies', {
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    year_manufacture:{
        type:Sequelize.CHAR,
        allowNull:false
    },
    status:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }
    
});

Movies.sync(); 
//criando table de Movies se ela ainda não existir no banco

module.exports = Movies;
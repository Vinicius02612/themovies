const Sequelize = require('sequelize');
const connection = require('../../dbconfig/dbconfig');

//importando tabela de filmes para realizar o relacionamento entre as tabelas
const ModelMovies = require('../Movies/ModelMovies');


//crinado tabela de Espectadores..
const Spectators = connection.define('Spectators', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

ModelMovies.hasMany(Spectators);// relacionamento de 1 espectador para varios Filmes
Spectators.belongsTo(ModelMovies);// relacionamento entre as tabelas

Spectators.sync({force: true}); 

module.exports =Spectators;
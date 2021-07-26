const Sequelize = require('sequelize');
const connection = require('../../dbconfig/dbconfig');

//importando tabela de filmes para realizar o relacionamento entre as tabelas
const MoldeMovies = require('../Movies/ModelMovies');


//crinado tabela de Espectadores..
const Spectators = connection.define('Spactators', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

MoldeMovies.hasMany(Spectators);// relacionamento de 1 espectador para varios Filmes
Spectators.belongsTo(MoldeMovies);// relacionamento entre as tabelas

//Spectators.sync({force: true});

module.exports =Spectators;
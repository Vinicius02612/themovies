//crindo configuração de conexão com banco de dados

const Sequelize = require('sequelize');
const connection = new Sequelize(
    'themovies',
    'root',
    '12345',{
        host:'localhost',
        dialect:'mysql',
        timezone: '-03:00'
    }
)

module.exports = connection
# DESAFIO BACK-END - SISTEMA DE CONTROLE DE FILMES

O objetivo é fazer um back-end de um sistema  que controla filmes e quais pessoas já assistiram.



## COMO USAR API??

A API foi criada usando o TypeORM SEQUELIZE e banco de dados MYSQL

OBS: a api não foi publicada em nenhum servidor online, por tanto para testar, terá que criar um banco de dados em sua máquina local
troque os dados root e password para as configurações de sua máquina.
``` 
const Sequelize = require('sequelize');
const connection = new Sequelize(
    'themovies',
    'root', // usuário de sua preferencia
    '12345',{ //senha do eu mysql se houver...
        host:'localhost',
        dialect:'mysql',
        timezone: '-03:00'
    }
)

module.exports = connection
```
Os models já estão predefinidos para criar as tabelas no banco de dados que foi criado

```
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
```

Agora que ja fez as configurações é hora brincar com a API.

Acessando a rota :
* É possivel ler todos os  filmes cadastrdos;
 `http://localhost:8080/movies` 


* É possivel cadastrar novos filmes; 
`http://localhost:8080/movies/save`


* É possivel inserir espectadores cadastrados;
 `http://localhost:8080/spectators` 

 * É possivel ver os espectadores cadastrados e seus filmes passando os parametros necessários;
  `http://localhost:8080/spectators/save` 




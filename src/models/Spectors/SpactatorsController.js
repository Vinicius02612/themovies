const express = require('express');
const router = express.Router();

const Spactators = require('../Spectors/ModelSpactators');

router.get("/spactators", (req, res) =>{
    res.send("Bem vindo a rota de Espcatodores")
});

module.exports = router


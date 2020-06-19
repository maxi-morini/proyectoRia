const express = require('express');
const router = express.Router();

const jugadores = require('../../ejemplo/jugadores.json');
const juegos = require('../../ejemplo/juegos.json');

router.get('/api/jugadores', (req, res)=>{  
    res.json(
        jugadores
    );
});

router.get('/api/juegos', (req, res)=>{  
    res.json(
        juegos
    );
});
router.post('/', async (req, res)=>{
    console.log(req.body);
});

module.exports = router;
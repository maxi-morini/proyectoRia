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
router.post('/api/jugadores', (req, res)=>{
    const {user,pass,logiName,fnac} = req.body;
    jugadores.push(req.body);    
    res.json(jugadores);
});

module.exports = router;
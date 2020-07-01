const express = require('express');
const _ = require('underscore');
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
router.put('/api/juegos',(req,res)=>{
    const{Nombre, Estado} = req.body;
    _.each(juegos, (juego , i)=>{
        if(juego.Nombre==Nombre){
            if(Estado == 'activa'){
            juego.Estado = "desactiva";
            }else{
                juego.Estado='activa'
            }
        }
    });
    res.json(juegos);
});

module.exports = router;
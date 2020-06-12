const {Router} = require('express');
const router = Router();
const jugadores = require('../ejemplo/jugadores.json');

router.get('/api/jugadores', (req, res)=>{
    console.log(jugadores);
    
    res.json(jugadores);
});

module.exports = router;
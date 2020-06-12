const {Router} = require('express');
const router = Router();
const jugadores = require('../ejemplo/juegos.json');

router.get('/api/juegos', (req, res)=>{
    res.json(jugadores);
});

module.exports = router;
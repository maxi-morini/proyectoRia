const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
   // const jugadores = await json
    
    res.json({
        status: 'api works'
    });
});

router.post('/', async (req, res)=>{
    console.log(req.body);
});

module.exports = router;
const express = require('express')

const respuestas = require('../../red/respuestas')
const controlador = require('./index');

const router = express.Router();
router.get('/', todos);
router.get('/:id', uno);

async function todos(req, res, next){
    try {
        const items = await controlador.todos();
        respuestas.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function uno(req, res, next){
    try {
        const items = await controlador.uno(req.params.id);
        respuestas.success(req, res, items, 200)
    }catch(err){
        next(err);
    }

}



module.exports = router;
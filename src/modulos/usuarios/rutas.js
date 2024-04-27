const express = require('express')

const seguridad = require('./seguridad')

const respuestas = require('../../red/respuestas')
const controlador = require('./index');

const router = express.Router();
router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar)
router.delete('/', eliminar);
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

async function agregar(req, res, next){
    try {
        const items = await controlador.agregar(req.body);
        if(req.body.id === 0){
            mensaje = 'Item guardado con exito';
        }else{
            mensaje = 'Item actualizado con exito';
        }
        respuestas.success(req, res, mensaje, 201)
    }catch(err){
        next(err);
    }

}

async function eliminar(req, res, next){
    try {
        const items = await controlador.eliminar(req.body);
        respuestas.success(req, res, 'item elemiminado saisfacoriamente', 200)
    }catch(err){
       next(err);
    }

}

module.exports = router;
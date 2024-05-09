const express = require('express')

const respuestas = require('../../red/respuestas')
const controlador = require('./index');

const router = express.Router();
router.get('/', todos);
router.get('/:id', get_alerts_by_user);
router.post('/', agregar)
router.delete('/', eliminar);
router.post('/get_alerts_publish', gte_items_publish);

async function todos(req, res, next){
    try {
        const items = await controlador.todos();
        respuestas.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function get_alerts_by_user(req, res, next){
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


async function gte_items_publish(req, res, next){
    try {
        const items = await controlador.get_alerts_publish(req.body.estado);
        respuestas.success(req, res, items, 200)
    }catch(err){
       next(err);
    }

}


module.exports = router;
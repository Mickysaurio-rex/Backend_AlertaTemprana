const express = require('express');
const morgan = require('morgan')
const config = require('./config');
const usuarios = require('./modulos/usuarios/rutas');
const auth = require('./modulos/auth/rutas');
const cors = require('cors');
const error = require('./red/errors');
const alertas = require('./modulos/alertas/rutas');
const estado = require('./modulos/estado/rutas');
const tipo_alerta=require('./modulos/tipo_alerta/rutas');
const tipo_desastre=require('./modulos/tipo_desastre/rutas');

const app = express();

const corsOptions = {
    origin: 'exp://192.168.0.19:8081',
};

app.use(cors(corsOptions));
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//configuracion
app.set('port', config.app.port);

//rutas
app.use('/api/usuarios', usuarios)
app.use('/api/auth', auth)
app.use('/api/alertas', alertas)
app.use('/api/estado', estado)
app.use('/api/tipo_alerta',tipo_alerta)
app.use('/api/tipo_desastre', tipo_desastre);
app.use(error);

module.exports = app;
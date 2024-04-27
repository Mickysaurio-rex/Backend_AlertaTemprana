const express = require('express');
const morgan = require('morgan')
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const auth = require('./modulos/auth/rutas');
const cors = require('cors');
const error = require('./red/errors');

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
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use('/api/auth', auth)
app.use(error);

module.exports = app;
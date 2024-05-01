const TABLA = 'usuario';
const auth = require('../auth')
module.exports = function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db = require('../../DB/mysql')
    }
    function todos(){
        return db.todos(TABLA)
    }

    function uno (id){
        return db.uno(TABLA, id);
    }

    async function agregar (body){
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            apellidos: body.apellidos,
            telefono: body.telefono,
            rol: body.rol
        }
        const respuesta = await db.agregar(TABLA, usuario);
        var insertID = 0;

        if(body.id === 0){
            insertID = respuesta.insertId
        }else{
            insertID = body.id;
        }

        let respuesta2 = '';
        if(body.usuario || body.password){
               respuesta2 = await auth.agregar({
                id: insertID,
                correo: body.correo,
                contrasena: body.contrasena

            })
        }

        return respuesta2;
    }

    function eliminar (body){
        return db.eliminar(TABLA, body);
    }
    return{
        todos,
        uno,
        eliminar,
        agregar
    }

}
const TABLA = 'alertas';
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
        const alerta = {
            id: body.id,
            titulo: body.titulo,
            descripcion: body.descripcion,
            fecha: body.fecha,
            hora: body.hora,
            imagen: body.imagen,
            id_zona: body.id_zona,
            id_estado: body.id_estado,
            id_tipo_alerta: body.id_tipo_alerta,
            id_tipo_desastre: body.id_tipo_desastre 
        }
        const respuesta = await db.agregar(TABLA, alerta);
        var insertID = 0;

        if(body.id === 0){
            insertID = respuesta.insertId
        }else{
            insertID = body.id;
        }
        return respuesta;
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
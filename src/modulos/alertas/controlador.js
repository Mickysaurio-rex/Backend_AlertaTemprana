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
            zona: body.zona
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
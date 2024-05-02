const TABLA = 'numeros_emergencia';
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

    function get_by_order(){
        return db.get_by_order(TABLA);
    }

    return{
        todos,
        uno,
        get_by_order
    }

}
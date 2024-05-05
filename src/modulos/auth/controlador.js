const TABLA = 'auth';
const bcrypt = require('bcrypt')
const auth = require('../../autenticacion')
module.exports = function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db = require('../../DB/mysql')
    }

    async function login(usuario, password){
        const data = await db.query(TABLA, {correo: usuario});

        return bcrypt.compare(password, data.contrasena)
            .then(resultado => {
                if(resultado === true){
                    //Generar un token
                    return true;
                }else{
                    //Generar error
                    throw new Error('Información Invalida')
                }
            })
    }
    async function agregar (data){

        const authData = {
            id: data.id
        }

        if (data.correo){
            authData.correo = data.correo
        }

        if (data.contrasena){
            authData.contrasena = await bcrypt.hash(data.contrasena,5)
        }

        return db.agregar(TABLA, authData);
    }

    return{
        agregar,
        login
    }

}
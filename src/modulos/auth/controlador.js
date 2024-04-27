const TABLA = 'auth';
const bcrypt = require('bcrypt')
const auth = require('../../autenticacion')
module.exports = function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db = require('../../DB/mysql')
    }

    async function login(usuario, password){
        const data = await db.query(TABLA, {usuario: usuario});

        return bcrypt.compare(password, data.password)
            .then(resultado => {
                if(resultado === true){
                    //Generar un token
                    return auth.asignarToken({...data});
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

        if (data.usuario){
            authData.usuario = data.usuario
        }

        if (data.password){
            authData.password = await bcrypt.hash(data.password,5)
        }

        return db.agregar(TABLA, authData);
    }

    return{
        agregar,
        login
    }

}
const app = require('./app');

app.listen(app.get('port'), () =>
    console.log("Servidor esuchcando en el puerto", app.get("port"))
);

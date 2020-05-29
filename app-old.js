const http = require('http'); // ya viene instalado en el Node

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
            nombre: 'Isabel',
            edad: 23,
            url: req.url
        }
        //res.write('HolaMundo');
    res.write(JSON.stringify(salida));
    res.end();
})

.listen(8080);
console.log('Escuchando el puerto 8080');
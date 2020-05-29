const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')

// el objeto env.PORT corriendo localmente no existe por lo que debemos poner un puerto local, pero sirve cuando esta corriendo en Heroku
const port = process.env.PORT || 3000;

//Nota: Tener cuidado cuando mandamos llamar la pagina y el servicio al mismo tiempo ya que solo mostrara uno de ellos

//Muestra la pagina web
app.use(express.static(__dirname + '/public'));



//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //Cuando usamos el dirname, le decimos que no importa cual pat tenga, pero tomalo todo y concatenale la siguiente ruta
app.set('view engine', 'hbs');


//Muestra el servicio
app.get('/', (req, res) => {
    // res.send('Hello World')

    res.render('home', {
        nombre: 'isabel castillo',
    });
})

app.get('/about', (req, res) => {
    // res.send('Hello World')

    res.render('about', {});
})
app.listen(port, () => {

    console.log(`Escucha peticiones en el puerto ${port}`);

})
const { response } = require('express')
const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers')

//no se el puerto de Heroku y lo llamo asi
const port = process.env.PORT || 3000

app.use( express.static(__dirname + '/public'))

//EXPRESS HBS ENGINE
hbs.registerPartials( __dirname + '/views/parciales')
app.set('view engine', 'hbs');


/*app.get('/',(req, res) => {
 // res.send('Hola Mundo')
 let salida = {
    nombre: 'Fabi',
    edad: 32,
    url: req.url
}

res.send(salida)
})*/

app.get('/',(req, res) => {
    res.render('home', {
        nombre: 'fabi',
        
    })
})
    
    app.get('/about',(req, res) => {
        res.render('about', {
            
        })
    })
        
    





app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})
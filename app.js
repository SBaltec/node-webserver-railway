const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


//Servir contenido estático
app.use(express.static('public'));
// app.get('/',  (req, res) =>  {
//   res.send('Home page')
// })

// app.get('/hola-mundo',  (req, res) =>  {
//     res.send('Hola Mundo')
//   })
app.get('/',  (req, res) =>  {
  // res.send('404 | Page not found')
       res.render('home', {
        name: 'Balam',
        title:'Road Trip by Balam'
       })

})
  app.get('/generic',  (req, res) =>  {
    // res.send('404 | Page not found')
    //  res.sendFile(__dirname +  '/public/generic.html')
    res.render('generic', {
      name: 'Balam',
      title:'Road Trip by Balam'
     })
  })
  
  app.get('/elements',  (req, res) =>  {
    res.render('elements', {
      name: 'Balam',
      title:'Road Trip by Balam'
  
    // res.send('404 | Page not found')
    //  res.sendFile(__dirname +  '/public/elements.html')
     })
  })
  app.get('*',  (req, res) =>  {
    // res.send('404 | Page not found')
    //  res.sendFile(__dirname +  '/public/404.html')
    res.render('home', {
      name: 'Balam',

      title:'Road Trip by Balam'
     })
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
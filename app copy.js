const express = require('express')
const app = express()
const port = 3000

//Servir contenido estático
app.use(express.static('public'));

app.get('/',  (req, res) =>  {
  res.send('Home page')
})

app.get('/hola-mundo',  (req, res) =>  {
    res.send('Hola Mundo')
  })
  
  app.get('*',  (req, res) =>  {
    // res.send('404 | Page not found')
     res.sendFile(__dirname +'/public/404.html')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
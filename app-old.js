const http =require('http');


http.createServer((req,res) => {
    
    ////Server json
    // res.writeHead(200, ({'Content-Type': 'application/json'}))

    // const persona= {
    //     id:1,
    //     nombre: 'Fernando'
    // }
    // res.write(JSON.stringify(persona));
    // res.end();


    ////Servidor csv
    // res.setHeader('Content-Disposition', 'attachment; filename= lista.csv')
    // res.writeHead(200, ({'Content-Type': 'application/csv'}))

    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Ana\n');
    // res.write('3, Luisa\n');
    // res.write('4, Karen\n');
    // res.end();

    res.end();
    
})
.listen(8080);

console.log('Recibiendo desde puerto de casa', 8080);

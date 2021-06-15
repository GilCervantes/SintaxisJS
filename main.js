//Porgrama principal
//Declaramos las variables e importamos las dependencias a usar.
const{ read } = require('fs');
var http = require('http'); //Objeto para crear el servidor de aplicaciones con JS
var urls = require('url');
var port = 3000; //Variable para redireccionar al puerto 3000
var rutas = {}; //Para almacenar las rutas que se van a atender

rutas['/user'] = user;
rutas['/admin'] = admin;
rutas['/client'] = client;

//Funciones para responder a las peticiones del cliente.
function user (res){
    res.writeHead(200, {'Content-type': 'text/html'}); //Funcion que devuelve un texto html, si la peticion es 200
    res.write('<h1>Hello User </h1>');
    read.end();
}

//Funcion para devolver texto/html
function client(res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Welcome</h1>');
    res.end();
}

function router(rutas, url, res){
    //Validar
    if(typeof rutas[url] === 'function'){
        return rutas[url](res);
    }else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.write('<h1> Wilcomen </h1>');
        res.end();
    }   

    function admin(res){

        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1> Hello Admin </h1>');
        read.end();
    
    }
     
    /*
        req -> require
        res -> response
    
    */ 
    //Iniciar servidor.
    http.createServer(function(req, res) {
        //Recoger el URL de la barra de direcciones. 
        url = urls.parse(req.url).pathname;
    }).listen(port, 'localhost', function(){
        console.log('Servidor listo y corriendo en: ' + port);
    });
}

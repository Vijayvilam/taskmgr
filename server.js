//calling express library    
var express = require('express');    
var app = express();    
var bodyparser = require('body-parser');    
//database configured in routes (./backend/routes)   
  
//configure app    
app.use('/app', express.static(__dirname + '/frontend')); //use static file    
app.use(bodyparser.json()); // for parsing application/json    
app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded    
    
//GET request     
app.get('/', function(req, res){    
    res.sendfile('frontend/index.html');    
});    
require('./backend/routes.js')(app);
app.listen('8080', function(){ 
    console.log('Server Running!!');    
});   
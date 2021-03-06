// tamplate ingines

var express = require('express');
var app = express();

// app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
}); 

// app.get('/profile/:name', function(req, res){
//     res.render('profile');
app.get('/profile/:name', function(req, res){
    res.send('You are viewing the profile of ' + req.params.name)
});


app.listen(3000);
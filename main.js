// server.js
// load the things we need
var express = require('express');
var app = express();
const bodyParser = require("body-parser");

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// add recipes page
app.get('/add_recipes', function(req, res) {
    res.render('pages/add_recipes');
});

app.post('/add_recipes', function(req, res) {
    var recipe = req.body.recipe;
    var tuna = req.body.tuna;
    console.log(recipe)
});

app.listen(3000);
console.log('listening on port 3000');
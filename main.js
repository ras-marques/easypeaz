// server.js
// load the things we need
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var fs = require('fs');

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
    var recipe = {name: req.body.recipe_name, link: req.body.recipe_link, ingredients: []};
    var data = req.body;
    for(var key in data){
        if(key != "recipe_name" && key != "recipe_link"){
            recipe.ingredients.push(key);
        }
    }
    var myJSON = JSON.stringify(recipe);
    fs.writeFile("test.txt", myJSON, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log(myJSON);
});

app.listen(3000);
console.log('listening on port 3000');
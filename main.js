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

app.post('/print_stored_json', function(req, res) {
    var recipes;
    fs.readFile('recipes.json', 'utf8', function (err, data) {
        if (err) throw err;
        recipes = JSON.parse(data);
        console.log(recipes);
    });
});

app.post('/add_recipes', function(req, res) {
    var data = req.body;
    var new_recipe_name = data.recipe_name;
    var new_recipe_link = data.recipe_link;
    var new_recipe_ingredients = [];
    for(var key in data){
        if(key != "recipe_name" && key != "recipe_link"){
            new_recipe_ingredients.push(key);
        }
    }

    var fs = require('fs');
    var recipes;
    fs.readFile('recipes.json', 'utf8', function (err, data) {
        if (err) throw err;
        recipes = JSON.parse(data);

        recipes[new_recipe_name] = {"link": new_recipe_link, "ingredients": new_recipe_ingredients}
        var myJSON = JSON.stringify(recipes);

        fs.writeFile("recipes.json", myJSON, function(err) {
            if (err) {
                console.log(err);
            }
        });

        console.log(recipes);
    });
    /*
    var recipes;
    fs.readFile('recipes.json', 'utf8', function (err, data) {
        if (err) throw err;
        recipes = JSON.parse(data);
        console.log(recipes);
    });

    console.log(new_recipe_name);
    recipes.new_recipe_name=new_recipe;
    var recipes_stringified = JSON.stringify(recipes);
    fs.writeFile("recipes.json", recipes_stringified, function(err) {
        if (err) {
            console.log(err);
        }
    });*/
});

app.listen(3000);
console.log('listening on port 3000');
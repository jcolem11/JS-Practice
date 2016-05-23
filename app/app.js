
//require('x') imports modules

var express = require('express');
var request = require('request');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	//use sendFile to send plain HTML
	//use render for templating engines
  var items = [1,2,3];
	res.render('index', {title: 'Hello,World.', message:'You suck.', items: items});
});

app.get('/api/:id', function (req,res){
	var id = req.params.id
	var regex = /[1-9]{0,3}/;
	request('http://pokeapi.co/api/v1/sprite/'+id, function (error, response, body) {
   	if (!error && response.statusCode == 200) {
   		var object = JSON.parse(body)
   		var spriteRef = 'http://pokeapi.co' + object.image
   		res.render('other', {title: 'You chose', message: object.pokemon.name, sprite: spriteRef});
  		}else{
  			res.send('Something went wrong...');
  		}
	})
});

app.get('/canvas', function (req,res){
  res.render('canvas');
});

app.get('/press', function (req,res){
  res.render('press');
});

app.get('/wave', function (req,res){
  res.render('wave');
});

app.get('/list', function (req,res){
    request('http://pokeapi.co/api/v1/pokedex/1/', function (error,response,body){
        var dex = JSON.parse(body)
        var list = [];
        dex.pokemon.forEach(function(element,index){
          var sprite = '';
          var name = element.name;
          list.push({name:name, sprite:sprite});
        });
        res.render('list', {items: list});
    });
});

/------/

app.post('/', function(req,res){
  res.send("YO! You did it!")
});

/------/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

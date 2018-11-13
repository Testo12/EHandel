var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var app = express();

var product = require('./routes/route');

var mongoose = require('mongoose');
var db_url = 'mongodb://User:a123456@ds063879.mlab.com:63879/testo12db';
mongoose.connect( db_url, {useNewUrlParser: true}); 
mongoose.Promise=global.Promise; 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/View/index.html');
  
});







app.listen('4242', function(){
  console.log('Server up');
});
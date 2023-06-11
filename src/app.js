var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var getUsers = require("./usecases/getUsers");
var createUser = require("./usecases/createUser");
var deleteUser = require("./usecases/deleteUser");
var updateUser = require("./usecases/updateUser");
var countCalledGetUser = require("./usecases/countCalledGetUser");
var auth = require('./middlewares/auth')

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", getUsers.getUser);
app.get("/users", getUsers.getUsers);
app.post("/users", createUser)
app.delete("/users", auth.auth, deleteUser)
app.put("/users", auth.auth, updateUser)
app.get("/users/access", countCalledGetUser);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
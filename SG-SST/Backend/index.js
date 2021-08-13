// traido de modelos
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.usuario = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["empleado", "admin", "HSE"];
// Hasta aquí
// traido de middleeares
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt,
  verifySignUp
};
//Hasta aquí

module.exports = db;

let express = require('express');

let bodyParser = require('body-parser');

let cors = require('cors');

// let mongoose = require('mongoose');

let app = express();


let apiRoutes = require("./rutas/rutas");

let dataBaseConfig = require('./basededatos/db');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(cors());

/*mongoose.connect(dataBaseConfig.db, { useUnifiedTopology: true, useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error conectando db")
else
    console.log("Db conectada con exito")*/

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('backend SG.SST'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("corriendo backend api en el puerto " + port);
});

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Sequelize = require('sequelize');
var models = require("./models");
var sequelize = models.sequelize;

var app = new express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/app"));

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

var actorRest = require(__dirname + "/routes/Actors.js");
app.use(actorRest);

var spectacleRest = require(__dirname + "/routes/Spectacles.js");
app.use(spectacleRest);

var sitRest = require(__dirname + "/routes/Distributions.js");
app.use(sitRest);

app.get('/create', (req, res) => {
    sequelize
        .sync({
            force: true
        })
        .then(() => {
            res.status(201).send('created')
        })
        .catch((error) => {
            console.warn(error)
            res.status(500).send('error')
        })
})
app.listen(8080);
//app.listen(process.env.PORT);
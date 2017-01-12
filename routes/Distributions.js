'use strict'
var models = require("../models");
var express = require("express");
var router = express.Router();

var Actor=models.names[0];
var Distribution=models.names[2];
var Spectacle=models.names[1];

Actor.hasMany(Distribution, {
    foreignKey: 'actorId'
})

Distribution.belongsTo(Actor, {
    foreignKey: 'actorId'
})

Spectacle.hasMany(Distribution, {
    foreignKey: 'spectacleId'
})

Distribution.belongsTo(Spectacle, {
    foreignKey: 'spectacleId'
})

router.post('/distributions',function(request, response){
  Distribution.create(request.body).then(function(distribution){
      Distribution.findById(distribution.id).then(function(distribution){
          response.status(201).send(distribution);
      });
  });
});

router.get('/distributions', function(request, response){
    Distribution.findAll().then(function(distribution){
        response.status(200).send(distribution);
    });
});

router.get('/distributions/:id', function(request, response){
    Distribution.findById(request.params.id).then(function(distribution){
        if(distribution){
            response.status(200).send(distribution);
        }
        else{
            response.status(404).send();
        }
    });
});

router.get('/Distributions/:id/actors', (req, res) => {
    Distribution
        .findAll({
            where: {
                spectacleId: req.params.id
            },
            include: [Spectacle, Actor]
        })
        .then((Actors) => {
            res.status(201).send(Actors);
        })
});

router.put('/distributions/:id', function(request, response) {
    Distribution
    .findById(request.params.id)
        .then(function(distribution) {
            if (distribution) {
                distribution
                .updateAttributes(request.body)
                    .then(function() {
                        response.status(200).send('updated');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('server error');
                    });

            }
            else {
                response.status(400).send();
            }
        });

});

router.delete('/distributions/:id', function(request, response) {
    Distribution
        .findById(request.params.id)
        .then(function(distribution) {
            if (distribution) {
                distribution.destroy().then(function() {
                        response.status(200).send('deleted');
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            }
            else {
                response.status(404).send('nu exista');
            }
        });

})

module.exports = router;

var models=require("../models");
var express=require("express");
var router=express.Router();

var Actor=models.names[0];

router.post('/actors', function(request, response){
    Actor.create(request.body).then(function(actor){
        Actor.findById(actor.id).then(function(actor){
            response.status(201).send(actor);
        });
    });
});

router.get('/actors/',function(request,response){
        Actor.findAll().then(function(actor){
            response.status(200).send(actor);
        });
    });
       router.get('/actors/:id',function(request,response){
       Actor.findById(request.params.id).then(function(actor){
            if(actor){
                response.status(200).send(actor);
            }
            else{
                response.status(404).send();
            }
        });
        
   });
   
    router.put('/actors/:id', function(request, response) {
    Actor
        .findById(request.params.id)
        .then(function(actor) {
            if (actor) {
                actor
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
                response.status(404).send();
            }
        });

});

router.delete('/actors/:id', function(request, response) {
    Actor
        .findById(request.params.id)
        .then(function(actor) {
            if (actor) {
                actor.destroy().then(function() {
                        response.status(204).send();
                    })
                    .catch(function(error) {
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            }
            else {
                response.status(404).send();
            }
        });

});
    
module.exports = router;
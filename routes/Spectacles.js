var models=require("../models");
var express=require("express");
var router=express.Router();

var Spectacle=models.names[2];

router.post('/spectacles', function(request, response){
    Spectacle.create(request.body).then(function(spectacle){
        Spectacle.findById(spectacle.id).then(function(spectacle){
            response.status(201).send(spectacle);
        });
    });
});

router.get('/spectacles/',function(request,response){
        Spectacle.findAll().then(function(spectacle){
            response.status(200).send(spectacle);
        });
           
        
    });
    router.get('/spectacles/:id',function(request,response){
        Spectacle.findById(request.params.id).then(function(spectacle){
            if(spectacle){
                response.status(200).send(spectacle);
            }
            else{
                response.status(404).send();
            }
        });
        
    });
    
    router.put('/spectacles/:id',function(request,response){
        Spectacle.findById(request.params.id).then(function(spectacle){
            if(spectacle){
                spectacle.updateAttributes(request.body).then(function(){
                    response.status(200).send('updated');
                }).catch(function(error){
                    console.warn(error);
                    response.status(500).send('server error');
                });
            } else{
                response.status(404).send();
            }
            
        });
    });
    
    
   router.delete('/spectacles/:id',function(request,response){
        Spectacle.findById(request.params.id).then(function(spectacle) {
            if(spectacle){
                spectacle.destroy().then(function(){
                    response.status(204).send();
                }).catch(function(error){
                    console.warn(error);
                    response.status(500).send('server error');
                });
            } else{
                response.status(404).send();
            }
        });
   });


module.exports = router;

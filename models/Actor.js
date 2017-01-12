module.exports = function(sequelize, Sequelize) {
     var Actor=sequelize.define('actors',{
         nameActor:{
             type:Sequelize.STRING,
             field:'nameActor'
         }},{
             timestamps:false
     });
    
    return Actor;
}; 
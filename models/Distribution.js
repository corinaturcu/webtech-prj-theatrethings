module.exports = function(sequelize, Sequelize){
    
    var Distribution=sequelize.define('Distributions',{
        
    },{
        timestamps:false
    });
    
    return Distribution;
}

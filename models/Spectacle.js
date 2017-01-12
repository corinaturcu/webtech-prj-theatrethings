module.exports=function(sequelize, Sequelize){
    
    var Spectacle=sequelize.define('spectacles',{
        denomination:{
            type:Sequelize.STRING,
            field:'denomination'
        },
        description:{
            type: Sequelize.STRING, 
            field: 'description'}
        },{
            timestamps:false,
            tableName: 'spectacles'
        });
    return Spectacle;
};

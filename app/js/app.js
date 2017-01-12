let app=angular.module("TheatreThings",['ui.router','ShowActorsController','ShowSpectaclesController','ShowDistributionController']);

app.config(["$stateProvider", '$urlRouterProvider', ($stateProvider,$urlRouterProvider) => {
    
   $urlRouterProvider.otherwise('/despre');
   
   $stateProvider.state('despre', {
            url: '/despre',
            templateUrl: 'views/despre.html',
        });
    
   $stateProvider.state('actori', {
            url: '/actori',
            templateUrl: 'views/actori.html',
            controller: 'ShowActorsController'
        });
    
    $stateProvider.state('spectacole', {
            url: '/spectacole',
            templateUrl : 'views/spectacole.html',
            controller:'ShowSpectaclesController'
        });
        
    $stateProvider.state('distributii', {
            url: '/distributii',
            templateUrl: 'views/distributii.html',
            controller:'ShowDistributionController'
        });
}]);
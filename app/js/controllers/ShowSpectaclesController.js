let ct2= angular.module("ShowSpectaclesController", ['ui.router']);

const server ="https://theatrethings-corinaturcu.c9users.io";

ct2.controller('ShowSpectaclesController', ['$scope', '$http', function($scope, $http){
    
    $http.get(server+'/spectacles')
    .then((response)=>{
        $scope.Spectacles=response.data;
        console.log($scope.spectacles);
    })
    .catch((error)=>{
        console.warn(error);
        $scope.Spectacles='Server Error';
    });
}]);

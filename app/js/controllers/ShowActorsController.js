let ctlr=angular.module("ShowActorsController",['ui.router']);

ctlr.controller('ShowActorsController',['$scope','$http', function($scope,$http){
  
    $http.get(server+'/actors')
    .then((response)=>{
        $scope.Actors=response.data;
        console.log($scope.Actors);
   })
    .catch((error)=>{
        console.warn(error);
       $scope.Actors='Server Error';
   });
       
}]);
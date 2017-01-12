let ct1 = angular.module("ShowDistributionController", ['ui.router']);

ct1.controller('ShowDistributionController', ['$scope', '$http', function($scope, $http){
    
    $http.get(server+'/distributions')
    .then((response)=>{
        $scope.Distributii=response.data;
    })
    .catch((error)=>{
        console.warn(error);
        $scope.Distributii='Server Error';
    });

    $scope.addDistributie = (distribution) => {
        $http.post(server + '/distributions', distribution)
             .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            })
            .catch((error) => console.log(error))
    }
    
    $scope.saveDistribution = (distribution,id) => {
            $http.put(server + '/distributions/' + id, distribution)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            }).catch((error) => console.log(error))
        }
        
        $scope.deleteDistribution = (distribution) => {
        $http.delete(server + '/distributions/' + distribution.id)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            })
            .catch((error) => console.log(error))
    }
        
}]);


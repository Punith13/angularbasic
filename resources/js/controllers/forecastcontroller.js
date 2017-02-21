weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService','weatherService', function($scope , $resource, $routeParams,  cityService , weatherService){
    
    $scope.city = cityService.city; 

    $scope.days = $routeParams.days || '2'; 

    $scope.weatherResult = weatherService.getWeatherData($scope.city , $scope.days);

    $scope.convertToCelsius = function(degK){

    return (parseFloat(degK) - 273.15).toFixed(2); 
    }

    $scope.convertToDate = function(dt){

    return new Date(dt * 1000);
    }
    
}]);

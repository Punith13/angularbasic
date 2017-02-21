//ROUTES
weatherApp.config(['$routeProvider', function($routeProvider){
      
     $routeProvider 
                  
     .when('/', {    
          templateUrl : '/resources/pages/home.htm' ,
          controller : 'homeController'
      })
             
      .when('/forecast', {
          templateUrl : '/resources/pages/forecast.htm' , 
           controller : 'forecastController'
      })
     
     // multiple route parameters /forecast/:days/:country
     .when('/forecast/:days',{
        templateUrl : '/resources/pages/forecast.htm' , 
        controller : 'forecastController' 
     })
                  
 }]);
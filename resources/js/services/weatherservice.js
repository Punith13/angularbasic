weatherApp.service('weatherService',['$resource', function($resource){
    
    this.getWeatherData = function(city , days){
    
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=0ab2f91e1fe8ad6cf7a8ccf799905c09" , { callback : "JSON_CALLBACK" } , { get : { method : "JSONP"}}); 

        return weatherAPI.get( {q : city , cnt : days});
        
    }    
}]); 
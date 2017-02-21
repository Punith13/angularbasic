// DIRECTIVES

weatherApp.directive('searchPanel' , function(){
    
    return{
        restrict: 'E',
        replace : true,
        templateUrl : '/resources/directive/search-panel.htm',
        scope: {
           weatherDay : "=", 
           dateFormat : "@" ,
           convertToStandard : '&', 
           convertToDate : "&" 
        }
    
    }
 
});
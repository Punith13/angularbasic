module.exports = function(grunt){
    
    // Configure the main project settings
    
    grunt.initConfig({
        
       // Basic settings and info about our plugins
        
        pkg: grunt.file.readJSON('package.json'), 
        
        // Name of the plugin (plugin name without the grunt-contrib)
        
        cssmin :{
            combine :{
                files :{
                    'resources/css/style.min.css' : ['resources/css/style.css']
                }
                
            }
            
        } , 
        
        // Uglify 
        
        uglify :{
            dist :{
                files :{
                    'resources/dist/js/mainscript.min.js' : ['resources/js/**/*.js']
                }
            }
            
        }
     
    });
    
    
    //Load the plugin 
    
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    
    // Do the task 
    
    grunt.registerTask('default',['cssmin','uglify']);    
    
    
}; 
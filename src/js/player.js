var player = (function(){
    var points = 0  //INT
        ,name  = "gracz";   //String
    
    function init() {
        
    };
    var module = {
      init: init,  
        
        // Testing private variables
        
      points: points,
      name:   name
    };
    
    return module;
})();
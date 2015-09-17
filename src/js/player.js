class player {
  constructor(points,name, id=null){
    this.id = id;
    this.points = points;
    this.name = name;
  }
}
/*
var player = (function(){
    var points = 0,  //INT
        name  = "gracz"
        ;   //String




    return {
      init: init,

        // Testing private variables

      points: points,
      name:   name
    };
})();

var cuteCrow = cuteCrow || {};
*/
cuteCrow.player = player;

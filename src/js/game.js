var game = (function(){
    var  players   = []
        ,questions = [];
    function init(){

    }

    function addPlayer(player){
      players.push(player);
    }
  var module = {
    players: players,
    init: init,
    addPlayer: addPlayer

  };


  return module;

})();
var cuteCrow = cuteCrow || {};
cuteCrow.game = game;

var game = (function(){
  'use strict';
    var  players   = [],
         questions = []
         ;
    function init(){

    }


    function addPlayer(player){
      players.push(player);
    }



  return {
    players: players,
    init: init,
    addPlayer: addPlayer

  };

})();
var cuteCrow = cuteCrow || {};
cuteCrow.game = game;


class game {
  constructor(players,questions){
    this.players = players;
    this.questions = questions;
  }

  addPlayer(player){
    this.players += player;
  }
  removePlayer(player){
    var todel = this.players.map(function(el){
      if (el.id === player.id){
        return el.id;

      }
    });
    throw "not implemented";

  }
}
export default game;
/*
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
*/

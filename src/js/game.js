var cuteCrow = cuteCrow || {};
cuteCrow.game = class game {
  constructor(players=[],questions=[]){
    this.players = players;
    this.questions = questions;
  }
  init(){

  }
  addPlayer(player){
    this.players.push(player);
  }
  removePlayer(player){
    var todel = this.players.map(function(el){
      if (el.id === player.id){
        return el.id;

      }
    });
    if (todel > -1){
      this.players.splice(todel,1);
    }
  }

};

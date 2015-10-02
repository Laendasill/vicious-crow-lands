var cuteCrow = cuteCrow || {};
cuteCrow.game = class game {
  constructor(players = [],questions = [],timeLimit = null ){
    this.players = players;
    this.questions = questions;
    this.currentQuestion = null;
    this.timeLimit = timeLimit;
    this.clock = null;
  }
  init(){
    if(this.players === 0){
      console.error("can't start game, no questions");
      return 0;
    }
    if(this.timeLimit !== null){
      this.clock = new cuteCrow.clock(this.timeLimit);
    }
    this.currentQuestion = this.questions[0];
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

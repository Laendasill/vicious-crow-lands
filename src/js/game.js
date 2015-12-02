var cuteCrow = cuteCrow || {};
// TODO: take care of player creation, do something with displaying elements
cuteCrow.game = class game {
  constructor(questions = null,timeLimit = null ){
    if(questions == null || questions.length == 0){
      throw "questions array can't be null or empty";
    }
    this.players = new cuteCrow.Players();
    this.questions = new cuteCrow.Iterator(questions);
    this.timeLimit = timeLimit;
    this.clock = null;
    this.chosen = null; //question specific variable for selected anser
  }
  init(){
    if(this.questions === 0){
      console.error("can't start game, no questions");
      return 0;
    }
    if(this.players == null || this.players.length === 0){
      console.error("can't start game, no players");
      throw "there is no players";
      return 0;
    }
    if(this.timeLimit !== null){
      this.clock = new cuteCrow.clock(this.timeLimit);
    }

  
  //  this.clock.run(); // this should be in startgame function
  }
  start(){
    if(this.clock !== null){
      this.clock.run();
    }
  }

  update(){
    this.players.update();
    this.questions.next();
  };

  debugInfo(){
    var arr =   [this.players,
                this.questions,
                this.currentQuestion,
                this.timeLimit,
                this.clock]
   return JSON.stringify(this,null,2)//JSON.stringify(arr,null,2);
  }

};

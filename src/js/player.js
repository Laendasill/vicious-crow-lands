var cuteCrow = cuteCrow || {};
cuteCrow.player = class player {
  constructor(name=""){

    this.points = 0;
    this.name = name;
  }

  addPoints(points){
    this.points += points;
  }
  getName(){
    return this.name;
  }
  printd(){
    return "name: " + this.name + " Points: " + this.points;
  }
};

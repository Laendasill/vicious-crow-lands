var cuteCrow = cuteCrow || {};
cuteCrow.clock = class clock {
  constructor(timeLimit = 0){
    this.timeLimit = timeLimit;
    this.intervalid = null;
    this.second = 1000;
    this.ticking = false;
  }
  run(){
    this.ticking = true;
    this.intervalid = setInterval(this.tick,this.second);
  }
  tick(){
    if(this.timeLimit == 0){
      this.end();
    } else {
      this.timeLimit -= 1;
    }
  }
  end(){
    this.ticking = false;
    clearInterval(this.intervalid);
  }
}

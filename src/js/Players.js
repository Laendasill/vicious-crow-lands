var cureCrow = cuteCrow || {};
cuteCrow.Players = class Players extends cuteCrow.Iterator{
  constructor(players = []){
    super(players);
  }
  addPlayer(name=null){
    if(name==null){
      throw "Player can't be null";
      return;
    }

    super.addToCollection(new cuteCrow.player(name));

  }
  removePlayer(player){
    super.removeElement(player.getName());

  }
  current(){
    return super.current();
  }
  update(){
    if (super.next() == null){
       super.revind();

    };
  }
  //*For testing*//
  getColletion(){
    return super.getColletion();
  }


}

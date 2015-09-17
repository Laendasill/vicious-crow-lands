
describe("Game", function(){
    var tgame;
    beforeEach(function(){
       tgame = new cuteCrow.game();
    });
  it("exists", function(){

    expect(typeof tgame).toEqual("object");
  });

  it("have method init", function(){

   expect(typeof tgame.init).toEqual("function");
  });

  it("can add players", function(){
    var tplayer =  new cuteCrow.player(0);
    tgame.addPlayer(tplayer);
    expect(tgame.players.length).toBe(1);
  });
});

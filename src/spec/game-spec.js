
describe("Game", function(){
    var tgame;
    beforeEach(function(){
       tgame = Object.create(game);
    });
  it("exists", function(){

    expect(typeof tgame).toEqual("object");
  });

  it("have method init", function(){

   expect(typeof tgame.init).toEqual("function");
  });

  it("have players array", function(){
      expect(tgame.players.constructor === Array).toBe(true);
  });

  it("can add players", function(){
    var tplayer = Object.create(player);
    tgame.addPlayer(tplayer);
    expect(tgame.players.length).toBe(1);
  });
});

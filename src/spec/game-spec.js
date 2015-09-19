
describe("Game", () =>{
    var tgame;
    beforeEach(() =>{
       tgame = new cuteCrow.game();
    });
  it("exists", () =>{

    expect(typeof tgame).toEqual("object");
  });

  it("have method init", () =>{

   expect(typeof tgame.init).toEqual("function");
  });

  it("can add players", () =>{
    var tplayer =  new cuteCrow.player(0);
    tgame.addPlayer(tplayer);
    expect(tgame.players.length).toBe(1);
  });
});

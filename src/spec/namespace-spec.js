describe("Namespace",function(){
  it("Exists",function(){
    var tnamespace = Object.create(cuteCrow);
    expect(tnamespace instanceof Object).toBe(true);
  });

  it("can have one member", function(){
    var tgame = Object.create(game)
        ,tnamespace = Object.create(cuteCrow);
        tnamespace = tnamespace || {};
        tnamespace.tgame = tgame;
        expect(tnamespace.tgame instanceof Object).toBe(true);
  });
  it("can have two members", function(){
    var tgame = Object.create(game)
        ,tplayer = Object.create(player)
        ,tnamespace = Object.create(cuteCrow);
        tnamespace = tnamespace || {};
        tnamespace.tgame = tgame;
        tnamespace = tnamespace || {};
        tnamespace.tplayer = tplayer;
        expect(tnamespace.tgame instanceof Object && tnamespace.tplayer instanceof Object).toBe(true);
  });
});

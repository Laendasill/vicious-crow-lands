
describe("Game", function(){
  it("exists", function(){
    var tgame = Object.create(game);
    expect(typeof tgame).toEqual("object");
  });
  
  it("have method init", function(){
   var tgame = Object.create(game);
   expect(typeof tgame.init).toEqual("function");
  });
});

describe("Players", ()=>{
  var tPlayers
  beforeEach(()=>{

    tPlayers = new cuteCrow.Players();

  });
  it("Exists",()=>{
    expect(tPlayers).toEqual(jasmine.anything());

  });

   it("Allow adding new elements", ()=>{
     var player = new cuteCrow.player("cat");
    expect(tPlayers.getColletion().length).toEqual(0);
    tPlayers.addPlayer(player);
    expect(tPlayers.getColletion().length).toEqual(1);

   });
   it("can iterate over elements", ()=>{
     var player1 = new cuteCrow.player("cat");

     var player2 = new cuteCrow.player("catt");

      tPlayers.addPlayer("cat");

      tPlayers.addPlayer("catt");


      expect( tPlayers.current()).toEqual(player1);
      tPlayers.update();
      expect( tPlayers.current()).toEqual(player2);
   });
   it("revinds iterator after calling update on last element", ()=>{
     var player1 = new cuteCrow.player("cat");

     var player2 = new cuteCrow.player("catt");

      tPlayers.addPlayer("cat");

      tPlayers.addPlayer("catt");
      tPlayers.update();
      tPlayers.update();
      expect( tPlayers.current()).toEqual(player1);
   });
});

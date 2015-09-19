describe("Player", () =>{
    var tplayer;
     beforeEach(() =>{
       tplayer = new cuteCrow.player(0);
    });

    it("Exists", () =>{

       expect(typeof tplayer).toEqual("object") ;
    });



});

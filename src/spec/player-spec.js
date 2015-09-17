describe("Player", function(){
    var tplayer;
     beforeEach(function(){
       tplayer = new cuteCrow.player(0);
    });

    it("Exists", function(){

       expect(typeof tplayer).toEqual("object") ;
    });



});

describe("Player", function(){
    var tplayer;
     beforeEach(function(){
       tplayer = Object.create(player); 
    });
    
    it("Exists", function(){
        
       expect(typeof tplayer).toEqual("object") ;
    });
    
    it("have INT points field", function(){
       expect(!isNaN(tplayer.points)).toEqual(true); 
    });
    
    it("have String name field", function(){
       expect(isNaN(tplayer.name)).toEqual(true); 
    });
    
    
});
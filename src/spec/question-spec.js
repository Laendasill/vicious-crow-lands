describe("Player", function(){
    var tquestion;
     beforeEach(function(){
       tquestion = new cuteCrow.question(0);
    });

    it("Exists", function(){

       expect(tquestion instanceof Object).toBe(true);
    });

    it("have method ansers to return ansers as array", function(){
      tquestion.ansers[0] = "it is it?";
      tquestion.ansers[1] = "it is that?";
      expect(tquestion.ansers).toEqual(jasmine.arrayContaining(["it is it?","it is that?"]));
    });
});

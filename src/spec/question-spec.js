describe("Player", function(){
    var tquestion;
     beforeEach(function(){
       tquestion = Object.create(question);
    });

    it("Exists", function(){

       expect(tquestion instanceof Object).toBe(true);
    });

    it("have method ansers to return ansers as array", function(){
      tquestion.anser1 = "it is it?";
      tquestion.anser2 = "it is that?";
      expect(tquestion.ansers).toEqual(jasmine.arrayContaining(["it is it?","it is that?"]));
    });
});

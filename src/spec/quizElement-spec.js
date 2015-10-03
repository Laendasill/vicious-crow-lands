describe("quizElement", () =>{
    var tquestion;
     beforeEach(() =>{
       tquestion = new cuteCrow.quizElement(0);
    });

    it("Exists", () =>{

       expect(tquestion).toEqual(jasmine.anything());
    });

    it("have method ansers to return ansers as array", () =>{
      tquestion.ansers[0] = "it is it?";
      tquestion.ansers[1] = "it is that?";
      expect(tquestion.ansers).toEqual(jasmine.arrayContaining(["it is it?","it is that?"]));
    });

    it("can be created from json object", () => {
      var obj = {
        "id": 0,
        "question": "Co trzyma w rękach warszawska syrenka?\n",
        "ansers": ["a.  miecz i tarczę\n",
         "b. pochodnię\n"],
         "correct": 1
      };
      var jsonQuestion = cuteCrow.quizElement.fromObject(obj);
      expect(jsonQuestion).not.toBe(false);
    });


});

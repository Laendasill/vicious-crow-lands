
describe("utils", () => {
  it("have validateObject method", () =>{
    expect(typeof cuteCrow.utils.validateObject).toBe('function');
  });
  xit("validateObject returns false for wrong object", () =>{
    var badobject = {"dog": "we"};
    expect(cuteCrow.utils.validateObject(badobject,["cat"])).toBe(false);
  });

  xit("validateObject returns false with some good properties", ()=>{
      var badobject = {"dog": "we",
                        "def": "wy",
                        "cat": "com"};
        expect(cuteCrow.utils.validateObject(badobject,["dog","cat","dfw"])).toBe(false);
  });
  it("can find and remove elements from array of objects", ()=>{
    var players = [{name: "cat"}, {name: "man"},{name: "last"}];
    cuteCrow.utils.findAndDelete("name","man",players);
    expect(players.length).toEqual(2);
  });
  it("can find and remove last element", ()=>{
    var players = [{name: "cat"}, {name: "man"},{name: "last"}];
    cuteCrow.utils.findAndDelete("name","last",players);
    expect(players.length).toEqual(2);
  });
});

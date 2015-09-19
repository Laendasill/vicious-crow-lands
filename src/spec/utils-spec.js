
describe("utils", () => {
  it("have validateObject method", () =>{
    expect(typeof cuteCrow.utils.validateObject).toBe('function');
  });
  it("validateObject returns false for wrong object", () =>{
    var badobject = {"dog": "we"};
    expect(cuteCrow.utils.validateObject(badobject,["cat"])).toBe(false);
  });

  it("validateObject returns false with some good properties", ()=>{
      var badobject = {"dog": "we",
                        "def": "wy",
                        "cat": "com"};
        expect(cuteCrow.utils.validateObject(badobject,["dog","cat","dfw"])).toBe(false);
  });
});

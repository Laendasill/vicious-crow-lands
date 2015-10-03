describe("Iterator", ()=>{
  var tIterator, data;
  beforeEach(()=>{
    data = [1,2,3,4]
    tIterator = new cuteCrow.Iterator(data);

  });

  it("Exists", ()=>{
    expect(tIterator).toEqual(jasmine.anything());
  });
  it("current return current elenent", ()=>{
    expect(tIterator.current()).toBe(1);
  });
  it("next method returns next element", ()=>{
    expect(tIterator.next()).toBe(2);
  });
  it("next method returns null after last element",()=>{
    for(var i = 0 ; i< 3; i +=1 ){
      tIterator.next();
    }
    expect(tIterator.next()).toEqual(null);
  });
  it("does not returns null when iterating in while loop",()=>{
    var arr = []
    while(tIterator.hasNext()){
      arr.push(tIterator.next())
    };
    expect(arr).not.toEqual(jasmine.arrayContaining([null]));
    expect(arr).toEqual(jasmine.arrayContaining([2,3,4]));
  });
});

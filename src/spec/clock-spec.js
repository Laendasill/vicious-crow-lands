describe("Clock", () => {
  var tclock;
  beforeEach(() =>{

     tclock = new cuteCrow.clock(1);


     jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it("Exists", ()=>{
    expect(tclock).toEqual(jasmine.anything());
  });
  it("don't run when not runned", ()=>{
    expect(tclock.ticking).toEqual(false);
  });
  it("can run", ()=>{
    tclock.run();
    expect(tclock.ticking).toEqual(true);
  });
  it("stops", ()=>{

    tclock.run();
    tclock.end();
    expect(tclock.ticking).toEqual(false);
  });
  it("stops afer specified time",()=>{
    tclock.run();
    jasmine.clock().tick(2001);
    expect(tclock.ticking).toEqual(false);
  });
});

describe("Clock", () => {
  var tclock, runSpy;
  beforeEach(() =>{

     tclock = new cuteCrow.clock(2);
     runSpy = {
       tick: tclock.tick,
       run: tclock.run
     };
     spyOn(runSpy, 'tick');
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
  it("ticks",()=>{
    tclock.run();
    jasmine.clock().tick(1000);
    expect(runSpy.tick).toHaveBeenCalled();

    expect(tclock.ticking).toEqual(false);
  });
});

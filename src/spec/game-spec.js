
describe("Game", () =>{
    var tgame;
    beforeEach(() =>{
       tgame = new cuteCrow.game();
    });
  it("exists", () =>{

    expect(typeof tgame).toEqual("object");
  });

  it("have method init", () =>{

   expect(typeof tgame.init).toEqual("function");
  });

  it("can add players", () =>{
    var tplayer =  new cuteCrow.player(0);
    tgame.addPlayer(tplayer);
    expect(tgame.players.length).toBe(1);
  });
  it("can remove players", ()=>{
    var tplayer =  new cuteCrow.player("player");
    tgame.addPlayer(tplayer);
    tgame.removePlayer("player");
    expect(tgame.players.length).toBe(0);
  });

  it("can move to another question", () =>{
    var questions = [
      {
        "id": 0,
        "question": "Co trzyma w rękach warszawska syrenka?\n",
        "anser1": "a.  miecz i tarczę\n",
        "anser2": "b. pochodnię\n"
      },
      {
        "id": 1,
        "question": "Jak brzmi hasło reklamowe Warszawy?\n",
        "anser1": "a. Warszawa Przygód!\n",
        "anser2": "b. Zakochaj się w Warszawie!\n"
      }
    ];
    var ntgame = new cuteCrow.game([],questions);
    expect(ntgame.currentQuestion).toBe(null);
    ntgame.init();
    expect(ntgame.currentQuestion.id).toBe(0);
    ntgame.nextQuestion();
    expect(ntgame.currentQuestion.id).toBe(1);
  });
});

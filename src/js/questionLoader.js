var questionLoader = (function(){

  function httpGet(theUrl){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
  }
  function publicgetQuestions(url){
    return [
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
      },
      {
        "id": 2,
        "question": "W jaki sposób zabijał swoje ofiary bazyliszek?\n",
        "anser1": "a. wzrokiem\n",
        "anser2": "b. buchając ogniem\n"
      },
      {
        "id": 3,
        "question": "Akcja której z legend rozgrywała się  w Warszawie?\n",
        "anser1": "a. Legenda o Smoku Wawelskim\n",
        "anser2": "b. Legenda o Złotej Kaczce\n"
      },
      {
        "id": 4,
        "question": "Przy której ulicy stał dom, w którego piwnicy straszył bazyliszek?\n",
        "anser1": "a. Marszałkowskiej\n",
        "anser2": "b. Krzywe Koło\n"
      },
      {
        "id": 5,
        "question": "Według legendy Wars i Sawa byli:\n",
        "anser1": "a. królewską parą\n",
        "anser2": "b. ubogimi rybakami\n"
      }
    ];
  }


return {
  getQuestions: publicgetQuestions
};
})();

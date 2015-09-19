var cuteCrow = cuteCrow || {};
cuteCrow.quizElement = class quizElement{
  constructor(id,question="",ansers=[],correct=0){
    this.id = id;
    this.question = question;
    this.ansers = ansers;
    this.correct = correct;
  }
  static fromObject(object){
    if(object.hasOwnProperty('id') && object.hasOwnProperty('question') &&
      object.hasOwnProperty('ansers') && object.hasOwnProperty('correct')){
      return new cuteCrow.quizElement(object.id,object.question,object.ansers,object.correct);
    }else{
      return false;
    }
  }



};
/*
var question = (function(){
  var question,
      ansers = [],
      correct = 0;
      //idk what to do
  function fromJson(js){

  }


  return {

    question: "",
    ansers: [],
    correct: 0
  };
})();
*/

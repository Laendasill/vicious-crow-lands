cuteCrow.quizElement = class quizElement{
  constructor(id,question="",ansers=[],correct=0){
    this.id = id;
    this.question = question;
    this.ansers = ansers;
    this.correct = correct;
  }
  static fromObject(object){
    if(this.validateObject(object)){
      return new this(object.id,object.question,object.ansers,object.correct);
    }
  }

  static validateObject(o){ // I should move it to some helper class or something
    if(o.hasOwnProperty('id') && o.hasOwnProperty('question') &&
      o.hasOwnProperty('ansers') && o.hasOwnProperty('correct')){
        return true;
      } else {
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

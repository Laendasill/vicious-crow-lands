var cuteCrow = cuteCrow || {};
cuteCrow.Questions = class Questions extends cuteCrow.Iterator{
  constructor(questions = []){
    super(questions);
  }

  addQuestion(name=null){
    if(name==null){
      throw "question can't be null";
      return;
    }
    var question = new cuteCrow.question(name);
    super.addToCollection(question);
  }
  removeQuestion(question){
    
  }
}

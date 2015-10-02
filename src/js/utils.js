var cuteCrow = cuteCrow || {};
cuteCrow.utils = class utils {
  static validateObject(object,properties){
    var props ="";
    properties.forEach(prop =>{
      if(!object.hasOwnProperty(prop)){
          props += `${prop}, `;
      }
    });
    if(props.length > 1){
      console.error(`Object is missing properties ${props}`);
      return false;
    } else {
      return true;
    }
  }

  static findQuestion(question){
    
  }
};

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

  static findAndDelete(key,val,collection){
    var i = 0;
    for(i = 0; i < collection.length; i+=1){
      var el = collection[i];
      console.log(i);
      if (el[key] === val){
        collection.splice(i,1);
        return;
      }

    }

  }
};

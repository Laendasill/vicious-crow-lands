var cuteCrow = cuteCrow || {};
cuteCrow.Iterator = class Iterator {
  constructor(collection  = []){
    this.index = 0;
    this.collection = collection;

  }
  hasNext(){
    return this.index < this.collection.length - 1 ;
  }
  revind(){
    this.index=0;
  }
  next(){
    if (this.hasNext() == false){
      return null;
    } else {
      this.index += 1;
      return this.collection[this.index];
    }
  }
  current(){
    return this.collection[this.index];
  }
  removeElement(name){
    cuteCrow.utils.findAndDelete("name",name,this.collection);
  }
  addToCollection(val){
     this.collection.push(val);
  }
    //*For testing*//
    getColletion(){
      return this.collection
    }
}

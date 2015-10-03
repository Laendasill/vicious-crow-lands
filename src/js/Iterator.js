var cuteCrow = cuteCrow || {};
cuteCrow.Iterator = class Iterator {
  constructor(collection  = []){
    this.index = 0;
    this.collection = collection;
    this.size = this.collection.length;
  }
  hasNext(){
    return this.index < this.size - 1 ;
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
}

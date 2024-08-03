const { getId } = require('./utils');
/** FEEDBACK: AMAZING JOB! You got all test cases to pass! */
class ToDoItem {
  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.isNecessary = priorityLevel > 8 ? true : false;
  }
  isImportant(){
    console.log(this.priorityLevel <= 5 ? "Not too important" : "Gotta get this done!")
  }
}


class ToDoList {
  static #lists = [];
  constructor(listName, owner) {
    this.id = getId();
    this.name = listName;
    this.owner = owner;
    this.items = [];
    ToDoList.#lists.push(this);
  }
  createItem(description, priorityLevel){
    const item = new ToDoItem(description,priorityLevel)
    this.items.push(item);
    return item;
  }
  getItems(){
    return [...this.items];
  }
  getCompletedCount(){
    let completed = 0;
    for(let i = 0; i < this.items.length; i++){
      if (this.items[i].isDone === false) continue;
      completed++;
    }
    return completed;
  }
  static list(){
    return [...ToDoList.#lists]
  }
  checkOff(description){
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].description = description){
        this.items[i].isDone = true;
      }
    }
  }
  static findBy(id){
    return ToDoList.#lists.find((list) => list.id === id)
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};
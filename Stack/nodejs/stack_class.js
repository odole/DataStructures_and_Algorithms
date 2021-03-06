// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }
  
  // push 
  push(element) { 
    this.items.push(element);
  }

  
  // pop 
  pop() { 
    if (this.items.length == 0) 
        return "No Any Element is the Stack"; 
    return this.items.pop(); 
  }

  // check for is Empty
  isEmpty() {
      return this.items.length === 0;
  }

  // get the peek value
  peek () {
    if (this.items.length == 0) 
        return "No Any Element is the Stack"; 
    return this.items[this.items.length - 1]; // LIFO method
  }

  // printStack function
  printStackItems() {
    var str_content = "";
    for (var i = 0; i < this.items.length; i++){
        str_content += this.items[i] + ", ";
    } 
    return str_content;
  }
}

module.exports = Stack
 
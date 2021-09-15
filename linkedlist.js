// linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
  } 
  
  pushBack(data) {
    const node = new Node(data);
    let current = this.head;
    
    while(current) {
      if (current.next) {
        current = current.next;
      } else {
        current.next = node;
        return node;
      }
    }
  }
  
  pushFront(data) {
    const node = new Node(data);    
    node.next = this.head;
    this.head = node;

    return node;
  }
  
  popFront() {
    this.head = this.head.next;
  }
  
  getFront() {
    return this.head;
  }
  
  getBack() {
    let current = this.head;
    
    while(current) {
      if (current.next) {
        current = current.next;
      } else {
        return current;
      }
    }
  }
  
  popBack() {
    let current = this.head;
    let previous = null;
    
    while(current) {
      if (current.next) {
        previous = current;
        current = current.next;
      } else {
        previous.next = null;
      }
    }
  }
  
  insertAfter(data, targetNode) {   
    const node = new Node(data);
    node.next = targetNode.next;
    targetNode.next = node;
    return node;
  }
  
  insertBefore(data, targetNode) {
    const node = new Node(data);
    let current = this.head;
    let previous = null;
    
    if (targetNode === current) {
      node.next = this.head;
      this.head = node;
      return node;
    }
    
    while (current && current.data) {
      if (current.data === targetNode.data) {
        node.next = current;
        previous.next = node;
        return node;
      }
      
      if (current.next) {
        previous = current;
        current = current.next;
      } else {
        current = null;
      }
    }
  }
  
  find(data) {
    let current = this.head;
    
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      
      if (current.next) {
        current = current.next
      } else {
        current = null;
      }
    }
    
    return false;
  }
  
  erase(data) {
    let current = this.head;
    let previous = null;
    
    while (current !== null) {
      if (current.data === data) {
        previous.next = current.next;
        return current;
      }

      previous = current;
      current = current.next;
    }
        
  }
  
  isEmpty() {
    return this.head === null;
    
  }
  
  countNodes() {
    let count = 0;
    let current = this.head;
    
    while (current !== null) {
      count += 1;
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
    
    return count;
  }
  
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
  
    while(current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    this.head = prev;
  }
  
  toArray() {
    const list = [];
    
    let current = this.head;
    
    while (current && current.data){
      list.push(current.data);
      
      if (current.next) {
        current = current.next;
      } else {
        current = null;
      }
    }
    
    return list;
  }
}

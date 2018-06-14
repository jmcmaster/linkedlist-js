function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.pushBack = function(data) {
  var node = new Node(data);
  if (this.head === null) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  return node;
};

LinkedList.prototype.pushFront = function(data) {
  var node = new Node(data);
  node.next = this.head;
  this.head = node;
  return node;
};

LinkedList.prototype.popFront = function(data) {
  this.head = this.head.next
};

LinkedList.prototype.getFront = function() {
  return this.head;
}

LinkedList.prototype.getBack = function() {
  if (this.head === null) return null;
  var current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  return current;
}

LinkedList.prototype.popBack = function() {
  var current = this.head;
  var previous = null;
  while (current.next != null) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
}

LinkedList.prototype.insertAfter = function(data, targetNode) {
  var node = new Node(data);
  node.next = targetNode.next
  targetNode.next = node;
  return node;
}

LinkedList.prototype.insertBefore = function(data, targetNode) {
  var node = new Node(data);
  var current = this.head;
  var previous = null;
  while (current.next != null) {
    if (current.data === data) {
      previous.next = node;
      node.next = current.next;
      return;
    }
    previous = current;
    current = current.next;
  }
  return -1;
}

LinkedList.prototype.find = function(data) {
  var current = this.head;
  while (current && current.data) {
    if (current.data === data) {
      return current;
    }
  }
  return -1;
}

LinkedList.prototype.erase = function(data) {
  var current = this.head;
  var previous = null;
  while (current && current.data && current.next) {
    if (current.data === data) {
      previous.next = current.next;
      return;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return -1;
}

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
}

LinkedList.prototype.countNodes = function() {
  var count = 0;
  var current = this.head;
  while (current != null) {
    count += 1;
    if (current.next != null) {
      current = current.next;
    } else {
      current = null;
    }
  }
  return count;
};

module.exports = LinkedList;
const LinkedList = require('../linkedlist.js');

describe('LinkedList', function() {

  describe('constructor', function() {
    it('should create an empty list', function() {
      var list = new LinkedList();
      expect(list.isEmpty()).toBe(true);
      expect(list.countNodes()).toBe(0);
    });
    it('has all the public API methods defined', function() {
      var list = new LinkedList();
      expect(list.countNodes).toBeDefined();
      expect(list.erase).toBeDefined();
      expect(list.find).toBeDefined();
      expect(list.getBack).toBeDefined();
      expect(list.getFront).toBeDefined();
      expect(list.insertAfter).toBeDefined();
      expect(list.insertBefore).toBeDefined();
      expect(list.isEmpty).toBeDefined();
      expect(list.popBack).toBeDefined();
      expect(list.popFront).toBeDefined();
      expect(list.pushBack).toBeDefined();
      expect(list.pushFront).toBeDefined();
    });
  });

  describe('.pushBack', () => {
    it('should add to last position', () => {
      const list = new LinkedList();
      list.pushBack(1);
      list.pushBack(6);
      expect(list.getBack().data).toBe(6);
      expect(list.getBack().next).toBe(null);
      expect(list.countNodes()).toBe(2);
    });

    it('should add to head position on an empty list', () => {
      const list = new LinkedList();
      list.pushBack(1);
      expect(list.getFront().data).toBe(1);
      expect(list.getFront().next).toBe(null);
      expect(list.countNodes()).toBe(1);
    });
  });

  describe('.pushFront', () => {
    it('should add to head position of a list', () => {
      const list = new LinkedList();
      list.pushFront(5);
      expect(list.getFront().data).toBe(5);
    });

    it('should move old head back one position', () => {
      const list = new LinkedList();
      list.pushFront(2);
      var oldHead = list.getFront();
      list.pushFront(3);
      expect(list.getFront().next).toBe(oldHead);
    });
  });

  describe('.popFront', () => {
    it('should remove node in the head position', () => {
      const list = new LinkedList();
      list.pushFront(3);
      list.pushBack(4);
      list.popFront();
      expect(list.getFront().data).toBe(4);
      expect(list.countNodes()).toBe(1);
    });

    it('list with one node should be empty', () => {
      const list = new LinkedList();
      list.pushFront(3);
      list.popFront();
      expect(list.isEmpty()).toBe(true);
    });
  });

  describe('.getFront', () => {
    it('should return a number', () => {
      const list = new LinkedList();
      list.pushFront(3);
      list.pushFront(4);
      expect(list.getFront().data).toBe(4);
    });

    it('should return null if list is empty', () => {
      const list = new LinkedList();
      expect(list.getFront()).toBeNull();
    });
  });

  describe('.getBack', () => {
    it('should return a number', () => {
      const list = new LinkedList();
      list.pushFront(1);
      list.pushBack(2);
      list.pushBack(3);
      expect(list.getBack().data).toBe(3);
    });

    it('should return null if list is empty', () => {
      const list = new LinkedList();
      expect(list.getBack()).toBeNull();
    });
  });

  describe('.popBack', () => {
    it('should remove last node in chain', () => {
      const list = new LinkedList();
      list.pushFront(1);
      list.pushBack(2);
      list.pushBack(3);
      list.popBack();
      expect(list.getBack().data).toBe(2);
    });
  });

  describe('.insertAfter', () => {
    it('should add new node after given node', () => {
      const list = new LinkedList();
      var nodeA = list.pushFront(1);
      var nodeB = list.pushBack(2);
      list.insertAfter(3, nodeA);
      expect(list.getFront().next.data).toBe(3);
    });

    it('should add to back if targetNode is the current tail', () => {
      const list = new LinkedList();
      var nodeA = list.pushFront(1);
      var nodeB = list.pushBack(2);
      list.insertAfter(3, nodeB);
      expect(list.getBack().data).toBe(3);
    });
  });

  describe('.insertBefore', () => {
    it('should insert new node before target node', () => {});
  });

  describe('.find', () => {});
  describe('.erase', () => {});
  describe('.isEmpty', () => {});
  describe('.countNodes', () => {});
});
class _Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    if (this.head === null) {
      this.head = new _Node(data);
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new _Node(data);
  }
  insertFirst(){}
  remove(){}
  find(){}
}




const linkedList = newLinkedList();


console.log(linkedList)
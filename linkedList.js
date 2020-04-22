function main() {

  class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      }
      else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }

    insertFirst(data) {
      if (this.head === null) {
        this.head = new _Node(data, null);
        return;
      }
      let temp = this.head;
      this.head = new _Node(data,temp)
    }

    insertBefore(data, key) {
      if (this.head === null || this.head.value === key) {
        insertFirst(data)
      }
      let currNode = this.head;
      //if the next value doesn't equal the key
      while (currNode.next.value !== key) {
        currNode = currNode.next
      }
      //we'll stop before the specified key
      let temp = currNode.next
      currNode.next = new _Node(data, temp)
    }

    insertAfter(data, key) {
      if (this.head === null || this.head.value === key) {
        insertFirst(data)
      }
      let currNode = this.head;
      //if the value doesn't equal the key
      while (currNode.value !== key) {
        currNode = currNode.next
      }
      //we'll stop on the specified key
      let temp = currNode.next
      currNode.next = new _Node(data, temp)
    }

    insertAt(data, index) { //index => 4
      if (this.head === null) {
        insertFirst(data)
      }
      let currNode = this.head;
      let counter = 0;
      // if the counter is less than the specified index, and the we're not at the end of the linked list
      while(index !== counter + 1){
        if(currNode === null){
          return
        }
        counter++
        currNode = currNode.next
      }
      let temp = currNode.next
      currNode.next = new _Node(data, temp)
    }

    remove(item) {
      // If the list is empty
      if (!this.head) {
        return null;
      }
      // If the node to be removed is head, make the next node head
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      // Start at the head
      let currNode = this.head;
      // Keep track of previous
      let previousNode = this.head;

      while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
    }

    find(item) {
      // Start at the head
      let currNode = this.head;
      // If the list is empty
      if (!this.head) {
        return null;
      }
      // Check for the item 
      while (currNode.value !== item) {
        /* Return null if it's the end of the list 
           and the item is not on the list */
        if (currNode.next === null) {
          return null;
        }
        else {
          // Otherwise, keep looking 
          currNode = currNode.next;
        }
      }
      // Found it
      return currNode;
    }

    // for easier readiabilty while testing
    display(){
      if(this.head === null){
        return
      }
      let currNode = this.head;
      while(currNode !== null){
        console.log(currNode)
        currNode = currNode.next
      }
      return
    }

    size(){
      if(this.head === null){
        return
      }
      let size = 0;
      let currNode = this.head;
      while(currNode !== null){
        size++
        currNode = currNode.next
      }
      return size
    }

    isEmpty(){
      return (this.head === null) ? true : false
    }

    findPrevious(key){
      if(this.head === null){
        return null
      }
      let currNode = this.head;
      while(currNode.next.value !== key){
        currNode = currNode.next
      }
      return currNode
    }

    findLast(key){
      if(this.head === null){
        return null
      }
      let current = this.head;
      while(current.next !== null){
        current = current.next
      }
      return current
    }

    reverse(){
      if(this.head === null){
        return null
      }
      // grab the current node, and its next. 
      let current = this.head;
      // set prev as the current node, this is going to interate one step behind our primary iterator i.e if we're on index 2, prev should be 1
      let previous = null;
      // save the curr.next in the temp variable
      let temp = current.next;
      while(current.next !== null){
        // set the curr.next to prev variable
        current.next = previous
        // set the previous to the current node
        previous = current
        // curr = temp variable
        current = temp
      }
      // assign the last node of the list to the head
      this.head = current
    }
  }

// mystery program
// because it has a nested while loop we know right away its an 0(n^2), polynomial complexity. 
// we're looking for duplicates in the supplied list
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    // we copy the current node
      let newNode = current;
      // is comparing every node in the list after our current to our current/placeholder
      while (newNode.next !== null) {
        // if the copy's next.value is the same as the current value
          if (newNode.next.value === current.value) {
            // then, we want to set the copy's next to the next one after that, then we skip the duplicate value, but erasing any reference to it
              newNode.next = newNode.next.next;
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}


  const SLL = new LinkedList();
  SLL.insertLast('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.remove('Husker')
  SLL.insertBefore('Athena','Boomer')
  SLL.insertAfter('Hotdog','Helo')
  SLL.insertAt('Kat',3)
  SLL.remove('Tauhida')
  console.log(SLL.display())
  SLL.reverse()
  console.log(SLL.display())

}

main()
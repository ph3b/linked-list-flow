// @flow

interface ILinkedList {
  add(data: any): void,
  removeAt(index: number): void,
  length(): number,
  getNodeAt(index: number): ?DataNode,
  getFirstNode(): ?DataNode
}

interface IDataNode {
  data: any,
  next: null | DataNode
}

class DataNode implements IDataNode {
  data;
  next: null | DataNode;

  constructor(data: any, nextNode: ?DataNode) {
    this.data = data;
    this.next = nextNode || null;
  }
}

class LinkedList implements ILinkedList {
  _headNode: ?DataNode;
  _length: number;

  constructor() {
    this._length = 0;
  }

  add(data: any) {
    const dataNode = new DataNode(data, null);
    if (!this._headNode) {
      this._headNode = dataNode;
    } else {
      let currentNode = this._headNode;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = dataNode;
    }
    this._length++;
  }

  removeAt(index: number) {
    const nodeToBeRemoved = this.getNodeAt(index);
    if (!nodeToBeRemoved) return;

    const previousNode = this.getNodeAt(index - 1);
    const nextNode = this.getNodeAt(index + 1);
    if (previousNode) {
      if (nextNode) {
        previousNode.next = nextNode;
      } else {
        previousNode.next = null;
      }
    } else {
      this._headNode = nodeToBeRemoved.next;
    }
    this._length--;
  }

  length() {
    return this._length;
  }

  getNodeAt(index: number): ?DataNode {
    if (index > this.length() - 1) return null;
    if (index < 0) return null;

    let traversedNodes = 0;
    let currentNode = this._headNode;
    if (!currentNode) return null;

    while (traversedNodes <= index) {
      if (index === traversedNodes) {
        return currentNode;
      } else if (currentNode.next !== null) {
        currentNode = currentNode.next;
        traversedNodes++;
      }
    }
    return null;
  }

  getFirstNode() {
    return this.getNodeAt(0);
  }
}

export default LinkedList;

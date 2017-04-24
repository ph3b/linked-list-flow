// @flow

import LinkedList from "../linked-list";

describe("Linked list", () => {
  describe("add()", () => {
    it("Should add item to list", () => {
      const linkedList = new LinkedList();

      linkedList.add("Hello");
    });
  });

  describe("length()", () => {
    it("It should return 0 when no items added", () => {
      const linkedList = new LinkedList();

      expect(linkedList.length()).toBe(0);
    });

    it("It should return 1 when one item is added", () => {
      const linkedList = new LinkedList();
      linkedList.add("Hello");

      expect(linkedList.length()).toBe(1);
    });

    it("Should return 3 when three items are added", () => {
      const linkedList = new LinkedList();
      linkedList.add("Hello");
      linkedList.add("Hello");
      linkedList.add("Hello");

      expect(linkedList.length()).toBe(3);
    });
  });

  describe("getNodeAt()", () => {
    it("Should get data node at 1 position with one node in list", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      const dataNode = linkedList.getNodeAt(0);

      if (!dataNode) throw new Error("Datanode is null");
      expect(dataNode.data).toBe("First");
    });

    it("Should get data node at 2 position with two nodes in list", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");

      const dataNode = linkedList.getNodeAt(1);
      if (!dataNode) throw new Error("Datanode is null");
      expect(dataNode.data).toBe("Second");
    });

    it("Should get data node at 2 position with three nodes in list", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");
      linkedList.add("Third");

      const dataNode = linkedList.getNodeAt(1);
      if (!dataNode) throw new Error("Datanode is null");
      expect(dataNode.data).toBe("Second");
    });

    it("Should return null if index is bigger than list length", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");

      const dataNode = linkedList.getNodeAt(1);
      expect(dataNode).toBeNull();
    });

    it("Should return null if index is less than zero", () => {
      const linkedList = new LinkedList();
      const dataNode = linkedList.getNodeAt(-1);
      expect(dataNode).toBeNull();
    });
  });

  describe("getFirstNode()", () => {
    it("Should get first data node by calling getFirstNode()", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");

      const dataNode = linkedList.getFirstNode();
      if (!dataNode) throw new Error("Datanode is null");
      expect(dataNode.data).toBe("First");
    });
  });

  describe("removeAt()", () => {
    it("Should return length 1 after removing node from a list of two", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");
      linkedList.removeAt(1);
      expect(linkedList.length()).toBe(1);
    });

    it("Should return length 1 after removing node from a list of two", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.removeAt(0);
      const node = linkedList.getNodeAt(0);
      expect(node).toBeNull();
    });

    it("Should return second as first node after removing first", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");
      linkedList.removeAt(0);
      const node = linkedList.getNodeAt(0);
      if (!node) throw new Error("Node was null");
      expect(node.data).toBe("Second");
    });

    it("Should not do change list if removing from empty list", () => {
      const linkedList = new LinkedList();
      linkedList.removeAt(1);
      expect(linkedList.length()).toBe(0);
    });

    it("Should remove anything if removing from index out of bounds", () => {
      const linkedList = new LinkedList();
      linkedList.add("Hello");
      linkedList.removeAt(1);
      expect(linkedList.length()).toBe(1);
    });

    it("Should remove last item", () => {
      const linkedList = new LinkedList();
      linkedList.add("First");
      linkedList.add("Second");
      linkedList.add("Third");

      linkedList.removeAt(2);
      expect(linkedList.length()).toBe(2);
      const firstNode = linkedList.getNodeAt(0);
      const secondNode = linkedList.getNodeAt(1);
      expect(firstNode && firstNode.data).toBe("First");
      expect(secondNode && secondNode.data).toBe("Second");
      expect(linkedList.getNodeAt(2)).toBeNull();
    });

    it(
      "Should remove item from the middle of a list and change indexer for remaining items",
      () => {
        const linkedList = new LinkedList();
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.add("Third");

        linkedList.removeAt(1);
        expect(linkedList.length()).toBe(2);
        const firstNode = linkedList.getNodeAt(0);
        const secondNode = linkedList.getNodeAt(1);
        expect(firstNode && firstNode.data).toBe("First");
        expect(secondNode && secondNode.data).toBe("Third");
        expect(linkedList.getNodeAt(2)).toBeNull();
      }
    );
  });
});

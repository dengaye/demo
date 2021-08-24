/*

*/


class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
		this.previous = null
	}
}

class DuLNode {
	constructor() {
		this.head = new Node('head');
	}

	find(item) {
		let currNode = this.head;
		while(currNode.element !== item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	insert(newElement, item) {
		let currNode = this.find(item);
		newNode.next = currNode.next;
		newNode.previous = currNode;
		currNode.next = newNode;
	}
	remove(item) {
		let currNode = this.find(item);
		currNode.previous.next = currNode.next;
		if(!(currNode.next == null)) {
			currNode.next.previous = currNode.previous;
		}
		currNode.next = null;
		currNode.previous = null;
	}
	findLast() {
		let currNode = this.head;
		while(!(currNode.next == null)) {
			currNode = currNode.next;
		}
		return currNode;
	}
	// 显示链表中的元素
	display() {
		let currNode = this.head;
		while(!(currNode.next == null)) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}

let cities = new DuLNode();
cities.insert('Conway', 'head');
cities.insert('ShenZhen', 'Conway');
cities.insert('HuiZhou', 'ShenZhen');
cities.remove('HuiZhou');
cities.display();
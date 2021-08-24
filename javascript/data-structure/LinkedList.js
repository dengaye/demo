/*
	单向链表
	结点结构： 存储数据 + 下一个结点的地址
	头结点为 null
*/

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LList {
	constructor() {
		this.head = new Node('head')
	}
	// 遍历链表，查找给定数据
	find(item) {
		let currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}
	insert(newElement, item) {
		const newNode = new Node(newElement);
		const current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}
	remove(item) {
		let prevNode = this.findPrevious(item);
		if(!(prevNode.next == null)) {
			prevNode.next = prevNode.next.next;
		}
	}
	// 显示链表中的元素
	display() {
		let currNode = this.head;
		while(!(currNode.next == null)) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
	findPrevious(item) {
		let currNode = this.head;
		while(!(currNode.next == null) && (currNode.next.element != item)) {
			currNode = currNode.next;
		}
		return currNode;
	}
}

let cities = new LList();
cities.insert('Conway', 'head');
cities.insert('ShenZhen', 'Conway');
cities.insert('HuiZhou', 'ShenZhen');
cities.remove('HuiZhou');
cities.display();


/*
*  队列 
	 只能在队尾插入元素，在队首删除元素
	 先进先出
	 后进后出

	 使用数组实现
*/

class Queue {
	constructor() {
		this.dataStore = [];
	}

	// 入队
	enqueue(element) {
		// push 向数组的末尾添加一个元素
		this.dataStore.push(element);
	}

	// 出队
	dequeue() {
		// shift 删除数组的第一个元素，并返回删除元素
		return this.dataStore.shift();
	}

	// 读取队头
	front() {
		return this.dataStore[0];
	}

	// 读取队尾
	back() {
		return this.dataStore[this.dataStore.length - 1];
	}

	toString() {
		return this.dataStore.toString();
	}

	isEmpty() {
		return this.dataStore.length == 0;
	}
}

const q = new Queue();
q.enqueue('Hi');
q.enqueue(' World!!');
q.dequeue()
console.log(q.toString());
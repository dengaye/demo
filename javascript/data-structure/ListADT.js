/*
	列表的抽象数据类型定义
	listSize(属性)：列表的元素个数
	pos(属性)：列表当前的位置
	length(属性)：返回列表中元素的个数
	clear(方法)：清空列表中的所有元素
	toString(方法)：返回列表的字符串形式
	getElement(方法)：返回当前位置的元素
	insert(方法)：在现有元素后插入新元素
	append(方法)：在列表的末尾添加新元素
	remove(方法)：从列表中删除元素
	front(方法)：将列表的当前元素移动到第一个元素
	end(方法)：将列表的当前位置移动到最后一个元素
	prev(方法)：将当前位置后移一位
	next(方法)：将当前位置后移一位
	currPos(方法)：返回列表你的前位置
	moveTo(方法)：将当前位置移动到执行位置
*/

class List {
	constructor() {
		this.listSize = 0;
		this.pos = 0;
		this.dataStore = [];
	}
	get length() {
		return this.listSize;
	}
	append(element) {
		this.dataStore[this.listSize ++] = element;
	}
	find(element) {
		for(let i = 0; i < this.dataStore.length; i ++){
			if(this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}
	remove(element) {
		let foundAt = this.find(element);
		if(foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	}
	toString() {
		return this.dataStore;
	}
	insert(element, after) {
		let insetPos = this.find(after);
		if(insetPos > -1) {
			this.dataStore.splice(insetPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	}
	clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = 0;
		this.pos = 0;
	}
	constains(element) {
		for(let i = 0; i < this.dataStore.length; i ++) {
			if(this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	}
	front() {
		this.pos = 0;
	}
	end() {
		this.pos = this.listSize - 1;
	}
	prev() {
		if(this.pos > 0) {
			--this.pos;
		}
	}
	next() {
		if(this.pos < this.listSize - 1) {
			++this.pos;
		}
	}
	currPos() {
		return this.pos;
	}
	moveTo(position) {
		this.pos = position;
	}
	getElement() {
		return this.dataStore[this.pos];
	}
}

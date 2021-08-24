/**
 * 字典
 * 是一种以键-值对形式存储数据的数据结构
 * 
 */


class Dictonary {
	constructor() {
		this.dataSource = new Array();
	}

	add(key, value) {
		this.dataSource[key] = value;
	}

	find(key) {
		return this.dataSource[key];
	}

	remove(key) {
		delete this.dataSource[key];
	}

	showAll() {
		console.log(this.dataSource)
		for(let key in Object.keys(this.dataSource)) {
			console.log(key + ' -> ' + this.dataSource[key]);
		}
	}
}

let pbook = new Dictonary();

pbook.add('Mike', '121');
pbook.add('David', '3434');
pbook.showAll();
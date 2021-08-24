/**
 * 集合set
 * 是一种包含不同元素的数据结构，集合中的元素称为成员
 * 两个重要特种：1. 集合中的成员是无序的；2. 集合中不允许相同成员存在
 * 
 */
class Set {
	constructor() {
		this.dataStore = [];
	}
	add(data) {
		if(this.dataStote.indexOf(data) < 0) {
			this.add.push(data);
			return true;
		}
		return false;
	}
}
/**
 * 散列
 * 是一种常见的数据存储技术，散列后的数据可以快速地插入或取用
 * 使用的数据结构叫散列表
 * 在散列表上插入、删除和取用数据都非常快，但是查找效率低下
 * 
 * 基于数组 Array
 */

 /**
	* 理想情况下，散列函数会将每个键值映射为一个唯一的数组索引
	* 碰撞（冲突）：即时使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象较 collision
	* 确保散列表中用来存储数据的数组其大小是个指数（和计算散列时使用的取余运算有关）
	* 数组长度应该大于100以上
	* 
  */


	class HashTable {
		constructor() {
			this.table = new Array(137);
		}

		put(data) {
			let pos = this.simpleHash(data);
			this.table[pos] = data;
		}

		showDistro() {
			let n = 0;
			for(let i = 0; i < this.table.length; ++i) {
				if(this.table[i] != undefined) {
					console.log(i + ': ' + this.table[i]);
				}
			}
		}

		// 散列值是ASCII码值的和除以数组长度的余数
		simpleHash(data) {
			let total = 0;
			for(let i = 0; i < data.length; i++) {
				total += data.charCodeAt(i);
			}
			return total % this.table.length;
		}

		/**
		 * 霍纳算法
		 * 先计算个字符的ASCII码值
		 * 求和时每次都要乘以一个质数
		 */
		betterHash(string, arr) {
			const H = 37;
			let total = 0;
			for(let i = 0; i < string.length; i++) {
				total += H * total + string.charCodeAt(i);
			}
			total = total % arr.length;
			return parseInt(total);
		}
	}

	var someNames = ['David', 'Jenifer', 'Donie', 'Raymond'];

	var hTable = new HashTable();
	for(let i = 0; i < someNames.length; i ++) {
		hTable.put(someNames[i]);
	}
	hTable.showDistro();


/**
 * 
 * 
 * 
 */

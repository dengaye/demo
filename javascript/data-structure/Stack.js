/*
 栈 数据结构
 特点：后进先出
 只能在栈顶添加或删除
*/

class Stack {
	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	// 入栈
	push(element) {
		this.dataStore[this.top ++] = element;
	}

	// 出栈
	pop(element) {
		return this.dataStore[--this.top];
	}

	// 返回栈顶元素
	peek() {
		return this.dataStore[this.top - 1];
	}

	length() {
		return this.top;
	}

	clear() {
		this.top = 0;
	}
}

// 将数字n转化成以b 为基数的数字， 此算法只适用于技术为2~9的情况
/*
	10进制转化成2~9机制的数字
	1. 数字n除以基数b，
	2. 得到商和余数，把余数存到栈里面；
	3. 然后用商除以基数，重复第2步，知道商的值为1为止
	4. 然后把栈里面的数据读取出来，即为最终结果
*/
function mulBase(num, base) {
	let s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num / base);
	} while(num > 0) {
		var converted = '';
		while(s.length() > 0) {
			converted += s.pop();
		}
		return converted;
	}
}


/*
	判断给定字符是否是回文
	回文的特点： 从前往后写和从后往前写都是一样的，如：dad
*/
function isPalindrome(word) {
	let s = new Stack();
	for(let i = 0; i < word.length; i ++) {
		s.push(word[i]);
	}
	let rword = '';
	while(s.length() > 0) {
		rword += s.pop();
	}
	if(word == rword) {
		return true;
	}
	return false;
}

// 递归， 求阶乘
function fact(num) {
	let s = new Stack();
	while(num > 1) {
		s.push(num --);
	}
	let sum = 1;
	while(s.length() > 0) {
		sum *= s.pop();
	}
	return sum;
}

function judgeBrackets(expression) {
	const lBranckets = new Stack();
	for(let i = 0; i < expression.length; i++) {
		if(expression[i] == '(') {
			lBranckets.push('(');
		}
		if(i == ')') {
			lBranckets.pop();
		}
	}
	if(lBranckets.length > 0) {
		return expression[expression.length - 1];
	} else {
		return -1
	}
}
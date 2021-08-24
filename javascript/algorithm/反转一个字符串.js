/***
 * 反转一个字符串
 */

//  for循环
function reverse1(str) {
	let temp = '';
	for(let i = str.length - 1; i >= 0; i --) {
		temp += str[i];
	}
	return temp;
}

// 使用数组的reverse
function reverse2(s) {
	return s.split('').reverse().join('');
}

// 反转句子
function reverseWords(s) {
	return s.split(' ').reverse().join(' ')
}

function reverseWords2(s) {
	let result = '';
	let wordLength = 0;

	for(let i = s.length - 1; i >= 0; i --) {
		if(s[i] == ' ') {
			result += s.substr(i + 1, wordLength) + ' ';
			wordLength = 0;
		} else {
			wordLength ++
		}
	}
	if(!!wordLength) {
		result += s.substr(0, wordLength)
	}

	return result;
}

function reverse23(str){
	return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverse23('awe sb'))
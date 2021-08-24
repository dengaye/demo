/***
 * 检测是否是回文
 * 回文的特点就是，正反排序都相等
 */

function isPalindrome(str) {
	let sortStr = str.split('').reverse().join('');
	return sortStr == str; 
}

function isPalindrome2(str) {
	for(let i = 0; i < str.length / 2; i ++) {
		if(str[i] != str[str.length - i - 1]) {
			return false
		}
	}

	return true;
}

console.log(isPalindrome2('abba'));
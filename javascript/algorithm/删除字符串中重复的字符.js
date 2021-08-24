/***
 * 删除字符串中重复的字符
 */

function deletedRepeatChart(str) {
	let hash = {};

	for(let i = 0; i < str.length; i ++) {
		if(hash[str[i]]) {
			hash[str[i]]++
		} else {
			hash[str[i]] = 1;
		}
	}

	return Object.keys(hash).join('')
}


console.log(deletedRepeatChart('abcdeda'))
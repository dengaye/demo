// 找到字符串中第一个非重复的字符串

// hash表
function fistRepeatChart(str) {
	let hashStr = {}

	for(let i = 0; i < str.length; i ++) {
		if(hashStr[str[i]]) {
			hashStr[str[i]] ++
		} else {
			hashStr[str[i]] = 1;
		}
	}

	console.log(hashStr)

	for(let i in hashStr) {
		if(hashStr[i] === 1) {
			return i;
		}
	}
}

function firstRepeatChart2(str) {
	for(let i = 0; i < str.length; i ++) {
		if(str.lastIndexOf(str[i]) == i && str.indexOf(str[i]) ==i) {
			return str[i];
		}
	}
}

console.log(firstRepeatChart2('aabvcd'))
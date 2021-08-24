/**
 * 生成n-m的随机整数
 */

function random(n, m) {
	return Math.floor(Math.random() * (m - n) + n)
}

console.log(random(10, 10))
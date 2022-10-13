/***
 * 
 * 从1-n中出现0的总个数
 * 
 * n = 50的话，就会有50 40 30 20 10, 5个0
 * 
 * n = 120， 10 - 90 是 10个0， 还有100， 110, 总共13个
 */



function countZero(n) {
	let count = 0;

	while(n > 0) {
		count += Math.floor(n / 10);
		n /= 10;
	}

	return count;

}

console.log(countZero(100))


/**
 * 找规律
 * 如果一个数能够被 10 整除，则起码有 10 个 0；
 * 
 * 
 */

function statisticZero(num) {
	let count = 00
	while(num > 0) {
		count += Math.floor(num / 10);
		num /= 10;
	}

	return count;
}
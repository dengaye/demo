/***
 * 
 * 质数：在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数
 */

function isPrime (num) {
	if(num <= 3) { return num > 1 }
	for(let i = 2; i < num; i ++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}

// 优化

function isPrime(num) {
	if(num <= 3) return num > 1;

	const sqrt = Math.sqrt(num);
	for(let i = 2; i <= sqrt; i ++) {
		if(num % i === 0) {
			return false;
		}
	}

	return true;
}

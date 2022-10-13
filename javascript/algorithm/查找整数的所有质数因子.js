
/**
 *  质数：大于1的自然数，出了1和它本身外不再有其他的因数
 * 
 */
/**
 * 初级——判断一个数是否时质数
 * 思路：
 * 循环判断 i 从 2 开始，i < num
 *  num % i === 0 ，如果为真，则终止循环，返回 false，表示这个数不是个质数
 */

 const hasPrimeNumber = (num) => {
	let flag = true
	for ( let i = 2; i < num; i ++) {
		if (num % i === 0) {
			flag = false;
			break;
		}
	}

	return flag;
}

/**
 * 进阶——从 2 开始，指定一个数并收集这个区间中所有的质数 [1, 100]
 * 
 * 思路
 * 循环
 */

function genaratorPrime(num) {
	const res = []
	for (let i = 2; i <= num; i ++) {
		if (hasPrimeNumber(i)) {
			res.push(i)
		}
	}

	return res;
}
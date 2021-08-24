/***
 *  斐波那契数列的特点：F(1) = 1, F(2) = 1, F(n) = F(n - 1) - F(n - 2)
 */

//  迭代
 function fibonaci(n) {
		let fibo = [0, 1];
		for(let i = 2; i <= n; i ++) {
			fibo[i] = fibo[i - 1] + fibo[i - 2]; 
		}
		return fibo[n];
 }

//  递归
function fibonaci2(n) {
	if(n >= 2) {
		return fibonaci2(n - 1) + fibonaci2(n - 2);
	} else {
		return n;
	}
}

// 返回len个长度的斐波那契数列 迭代
function fibonaci3(len) {
	let fiboArr = [1, 1];
	while(fiboArr.length < len) {
		fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
	}

	return fiboArr;
}

// 递归
function fibonaci4(i) {
	if(i < 2) return i == 0 ? 0 : 1;
	return fibonaci4(i - 1) + fibonaci4(i - 2)
}

function main(len) {
	let result = [];
	for(let i = 1; i < len; i ++) {
		result.push(fibonaci4(i))
	}
	return result;
}

console.log(main(10))
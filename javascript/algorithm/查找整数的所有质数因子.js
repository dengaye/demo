
/**
 *  质数：大于1的自然数，出了1和它本身外不再有其他的因数
 * 
 */
var primeFactors = function(n){
	let factors = [];
	let divider = 2;
	while(n > 2) {
		if(n % divider == 0) {
			factors.push(divider);
			n /= divider;
		} 
		divider ++;
	}

	return factors;
}


console.log(primeFactors(100))
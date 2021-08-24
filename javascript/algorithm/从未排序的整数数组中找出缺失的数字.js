/**
 * 假如你有1-100的整数，其中缺了那个，怎么找出来
 */

function missingNum(arr) {
	const max = Math.max.apply(Math, arr);
	const min = Math.min.apply(Math, arr);
	let missing = []

	for(let i = min + 1; i < max; i ++) {
		if(arr.indexOf(i) == -1) {
			missing.push(i);
		}
	}

	return missing;
}

console.log(missingNum([1, 2, 3, 4, 5, 6, 7, 8, 10]))
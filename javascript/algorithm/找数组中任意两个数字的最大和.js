/***
 * 
 * 找到最大的两个数并返回他们的和
 * 
 */


function topSum1(arr) {
	const length = arr.length;
	if(length < 2) return null;
	if(length > 2) {
		arr = arr.sort((a, b) => a - b);
	} 
	return arr[length - 1] + arr[length - 2];
}


console.log(topSum1([1, 2, 3, 4, 5, 90, 1]))
/**
 * 
 * 未排序的数组中，检查是否有任何两个数字的和等于给定数字
 *
 */

//  暴力方法
function twoSum1(arr, sum) {
	let result = false;
	out:
	for(let i = 0; i < arr.length - 1; i ++) {
		for(let j = i + 1; j < arr.length; j ++) {
			if(arr[i] + arr[j] == sum) {
				result = true;
				break out;
			}
		}
	}

	return result;
}


function twoSum2(arr, sum) {
	let obj = {};
	let num;

	for(let i = 0; i < arr.length; i ++) {
		num = sum - arr[i];
		if(obj[num]) {
			return true;
		} else {
			obj[arr[i]] = true;
		}
	}
	return false;
}

console.log(twoSum2([ 4, 5, 4], 9));
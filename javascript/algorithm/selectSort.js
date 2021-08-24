//  选择排序
/***
 * 
 * 把自己当做最小的，与它后面所有的数作比较，选出最小的出来
 * 
 * n - i + 1, 与 n - i - 2 做比较
 */

function selectSort(arr) {
	const length = arr.length;
	let min;

	for(let i = 0; i < length - 1; i ++) {
		min = i;

		for(let j = i + 1; j < length; j ++) {
			if( arr[min] > arr[j] ) {
				min = j;
			}
		}

		if(min != i) {
			[ arr[min], arr[i] ] = [ arr[i], arr[min] ]
		}
	}

	return arr;
}

var a = [1, 3 , 0, 11, 99, 1, 30, 1, 3, 0];

selectSort(a);

console.log(a)
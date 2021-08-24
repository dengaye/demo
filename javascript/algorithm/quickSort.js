//  快速排序
/***
 * 
 * 
 */

function quickSort(arr) {
	if( arr.length <= 1) { return arr };

	let centerIndex = Math.floor(arr.length / 2);
	let center = arr.splice(centerIndex, 1)[0];
	let left = [];
	let right = [];

	for(let i = 0; i < arr.length; i ++) {
		if(arr[i] < center) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return quickSort(left).concat([center], quickSort(right));
}

var a = [1, 3, 2, 0 , 4, 1, 0, 11, 3 , 1]

a = quickSort(a);
// 直接插入排序
/***
 * 默认第一个为以排序好的，排序好了的最后一个与未排序的第一个作比较
 * 如果小于，就把未排序的拿出来，与排好序的做比较，直到找到合适的位置，插入
 * 
 */

function insertSort(arr) {
	const length = arr.length;
	let i, j;
	let temp;
	for(i = 1; i < length; i ++) {
		if(arr[i] < arr[i - 1]) {
			temp = arr[i];
			for(j = i - 1; arr[j] > temp; j --) {
				arr[j + 1] = arr[j];
			}
			arr[j + 1] = temp;
		}
	}
	return arr;
}

var a = [1, 3, 2, 0 , 4, 1, 0, 11, 3 , 1]

insertSort(a);
console.log(a)
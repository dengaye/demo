// 冒泡排序
function bubbleSort(arr) {
	const length = arr.length;
	let flag = true;

	for(let i = 0; i < length && flag; i ++) {
		flag = false;
		for(let j = length - 2; j >= i; j --) {
			if(arr[j] > arr[j + 1]) {
				flag = true;
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]
			}
		}
	}

	return arr;

}

function bubbleSort(arr) {
	const length = arr.length;
	let flag = true;

	for(let i = 0; i < length && flag; i ++) {
		flag = false;
		for(let j = length - 2; j >= i; j --) {
			if(arr[j].charCodeAt() > arr[j + 1].charCodeAt()) {
				flag = true;
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]
			}
		}
	}
	return arr;
}

let a = [1, 3, 1, 4, 2, 9, 0];
bubbleSort(a);
console.log(a)
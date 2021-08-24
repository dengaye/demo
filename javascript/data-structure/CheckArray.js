class CheckArray {
	constructor(numElements) {
		this.dataSource = [];
		this.numElements = numElements;
		this.pos = 0;

		for(let i = 0; i < numElements; i++) {
			this.dataSource[i] = i;
		}
	}

	setData() {
		for(let i = 0; i < this.numElements; i++) {
			this.dataSource[i] = Math.floor(Math.random() * (this.numElements + 1));
		}
	}
	
	insert(element) {
		this.dataSource[this.pos++] = element;
	}
	
	clear() {
		for(let i = 0; i < this.dataSource.length; i++) {
			this.dataSource[i] = 0;
		}
	}

	toString() {
		let restr = '';
		for(let i = 0; i < this.dataSource.length; i++) {
			restr += this.dataSource[i] + ' ';
			if(i > 0 && i % 10 == 0) {
				restr += ' \n ';
			}
		}
		return restr;
	}

	bubbleSort() {
		let numElements = this.dataSource.length;
		for(let outer = numElements; outer >= 2; --outer) {
			for(let inner = 0; inner <= outer - 1; inner ++) {
				if(this.dataSource[inner] > this.dataSource[inner + 1]) {
					this.swap(this.dataSource, inner, inner + 1);
				}
			}
			console.log(this.toString())
		}
	}

	swap(arr, index1, index2) {
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}
}

// let numElements = 10;
// let myNums = new CheckArray(numElements);
// myNums.setData();
// console.log(myNums.toString() + 'asdas ----- ');
// myNums.bubbleSort();
// console.log(myNums.toString());


function bubbleSort(arr) {
	let length = arr.length;
	let temp;
	for(let i = 0; i < length - 1; i ++) {
		for(let j = i ; j < length - 1; j ++) {
			if(arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		console.log('---- ', arr)
	}
	return arr;
}

console.log(bubbleSort([2, 3, 1, 3, 111, 1]))
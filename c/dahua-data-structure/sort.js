
function insetSort(arr) {
	const length = arr.length;
	let i, j, temp;
	for(i = 1; i < length; i ++)
	{
		if(arr[i] < arr[i - 1]) {
			temp = arr[i];
			for(j = i - 1; arr[j] > temp; j --)
			{
				arr[j + 1] = arr[j];
			}
			arr[j + 1] = temp;
		}
	}
	return arr;
}


function shellSort(arr) {
	const length = arr.length;
	let i, j, temp, increment;
	increment = length;
	do {
		increment = parseInt(increment / 3) + 1;

		for(i = increment; i <= length; i ++)
		{
			if(arr[i] < arr[i - increment]) {
				temp = arr[i];
				for(j = i - increment ; j >= 0 && arr[j] > temp; j -= increment) {
	   				arr[j + increment] = arr[j];
				}
				arr[j + increment] = temp;
			}
		}
	} while (increment > 1) {};

	return arr;
}
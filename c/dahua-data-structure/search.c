#include <stdio.h>

int main() 
{
	int Sequential_Search();
	int Sequential_Search2();
	int Binary_Search();
	int a[]={0,1,2,3,4,5,6,7,8,9,10,11,12}, result;
	result = Binary_Search(a, 13, 0);
	if(result == -1) 
	{
		printf("没有找到");
	} else {
		printf("result: %d", result);
	}
	return 0;
}

int Sequential_Search(int *a, int n, int key)
{
	int i = 1;
	for(; i <= n; i ++)
	{
		if(a[i] == key)
			return i;
	}
	return -1;
}

int Sequential_Search2(int *a, int n, int key)
{
	int i = n;
	a[0] = key;
	while(a[i] != key)
	{
		i --;
	}
	return i;
}

int Binary_Search(int *a, int n, int key)
{
	int low, high, mid;
	low = 0;
	high = n;
	while(low <= high)
	{
		mid = (high + low) / 2;
		if(key < a[mid])
			high = mid - 1;
		else if (key > a[mid])
			low = mid + 1;
		else 
			return mid;
	}
	return -1;
}

int Interpolation_Search(int *a, int n, int key)
{
	int low, high, mid;
	low = 0;
	high = n;
	while(low <= high)
	{
		mid = low + (high - low) * ((key - a[low]) / (a[high] - a[low]));
		if(key < a[mid])
			high = mid - 1;
		else if(key > a[mid])
			low = mid + 1;
		else 
			return mid;
	}
	return -1;
}
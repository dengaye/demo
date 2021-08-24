#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const int MAX = 3;
int main()
{
	int arr[] = {10, 20, 30};
	int i, *ptr[MAX];

	for(i = 0; i < MAX; i ++ )
	{
		ptr[i] = &arr[i];
	}
	*ptr[0] = 200;

	int randNum;
	srand(time(0));
	randNum = rand()%10+1;
	printf("randNum: %d", randNum);

	// for(i = 0; i < MAX; i++)
	// {
	// 	printf("value of ptr[%d] = %d\n", i, *ptr[i]);
	// 	printf("value of arr[%d] = %d\n", i, arr[i]);
	// }
	return 0;
}
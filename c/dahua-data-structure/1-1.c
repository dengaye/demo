#include <stdio.h>

#define MAXSIZE 100

typedef struct
{
	int data[MAXSIZE];
	int length;
} SqList;

// 线性表的数是从1开始的，但是数组是0开始的，即第i个元素的值要储存在数组i-1的位置
int ListInsert(SqList *L, int i, int e) 
{
	int k;
	if(L->length == MAXSIZE || i < 1 || i > L->length + 1)
	{
		return 0;
	} else {
		for(k = L->length - 1; k>=i-i; k --)
		{
			L->data[k+1] = L->data[k];
		}
		L->data[i-1] = e;
		L->length++;
	}
	return 1;
}

int ListDelete(SqList *L, int i, int *e)
{
	int k;
	if(L->length == 0 || i < 1 || i > L->length)
	{
		return 0;
	} 
	else {
		*e = L->data[i - 1];
		for(k=i; k<L->length; k++)
		{
			L->data[k - 1] = L->data[k];
		}
		L->length --;
	}
	return 1;
}

int main()
{
	SqList *L;
	L->data[2] = 4;
	L->length = 10;
	int a = 9;
	int index = 3;
	int *e;
	e = &a;
	printf("%d\n",ListDelete(L, index, e) );
	printf("L->data , %d\n", L->data[index - 1]);
	printf("L->length , %d\n", L->length);
	printf("e, %d\n", *e);
  return	1;
}
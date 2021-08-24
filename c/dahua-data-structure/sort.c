#include <stdio.h>
#define MAXSIZE 10

typedef struct
{
	int r[MAXSIZE + 1]; // 用于存储要排序数组，r[0]用作哨兵或临时变量
	int length;
} SqList;

void HeapAdjust();

void swap(SqList *L, int i, int j)
{
	int temp = L->r[i];
	L->r[i] = L->r[j];
	L->r[j] = temp;
}

int main() 
{
	void BubbleSort1();
	void BubbleSort2();
	void BubbleSort3();

	void SimpleSelectSort();
	
	void InsertSort();

	void ShellSort();

	void HeapSort();

	SqList b = {.r={0, 50, 70, 90, 60, 10, 40, 80, 30, 20},.length=10};
	HeapSort(&b);
	printf("%d\n", b.r[1]);
	printf("%d\n", b.r[2]);
	printf("%d\n", b.r[3]);
	printf("%d\n", b.r[4]);
	printf("%d\n", b.r[5]);
	printf("%d\n", b.r[6]);
	return 0;
}

// 简单的交换排序
void BubbleSort1(SqList *L)
{
	int i, j;
	for(i = 1; i < L->length; i++)
	{
		for(j = i + 1; j <= L->length; j ++)
		{
			if(L->r[i] > L->r[j])
			{
				swap(L, i, j);
			}
		}
	}
}

// 真正的冒泡排序, 从后面开始比较，小的就出现在最前面，想冒泡的样子
void BubbleSort2(SqList *L) 
{
	int i, j;
	for(i = 1; i < L->length; i++)
	{
		for(j = L->length - 1; j >= i; j--)
		{
			if(L->r[j] > L->r[j+1])
			{
				swap(L, j, j+1);
			}
		}
	}
}

// 对冒泡排序的改进
void BubbleSort3(SqList *L)
{
	int i,j;
	int flag = 1;
	for(i = 1; i < L->length && flag == 1; i ++)
	{
		flag = 0;
		for(j = L->length - 1; j >= i; j --)
		{
			if(L->r[j] > L->r[j + 1])
			{
				swap(L, j, j+1);
				flag = 1;
			}
		}
	}
}

// 简单选择排序 Simple Selection Sort
void SimpleSelectSort(SqList *L) 
{
	int i, j, min;
	for(i = 1; i < L->length; i ++)
	{
		min = i;
		for(j = i + 1; j <= L->length; j ++)
		{
			if(L->r[min] > L->r[j])
				min = j;
		}
		if(i != min) {
			swap(L, i, min);
		}
	}
}

// 直接插入排序算法
void InsertSort(SqList *L) 
{
	int i, j;
	for(i = 2; i <= L->length; i++)
	{
		if(L->r[i] < L->r[i-1]) // 需将L->r[i]插入有序子表
		{
			L->r[0] = L->r[i];
			for(j = i - 1; L->r[j] > L->r[0]; j --)
				L->r[j + 1] = L->r[j];  
			L->r[j + 1] = L->r[0];
		}
	}
}

// 希尔排序：对于顺序而言
void ShellSort(SqList *L)
{
	int i, j;
	int increment = L->length;
	do
	{
		increment = increment / 3 + 1;  // 增量序列
		for(i = increment + 1; i<= L->length; i++)
		{
			if(L->r[i] < L->r[i - increment])
			{
				L->r[0] = L->r[i];
				for(j = i - increment; j > 0 && L->r[0] < L->r[j]; j -= increment)
					L->r[j + increment] = L->r[j];
				L->r[j + increment] = L->r[0];
			}
		}
	} while (increment > 1);
}

// 堆排序
void HeapSort(SqList *L) 
{
	int i;
	for(i = L->length / 2; i > 0; i--)
	{
		HeapAdjust(L, i, L->length);
	}
	for(i  = L->length; i > 1; i --) 
	{
		swap(L, 1, i);
		HeapAdjust(L, 1, i - 1);
	}
} 
// 构建一个大顶堆
void HeapAdjust(SqList *L, int s, int m)
{
	int temp, j;
	temp = L->r[s];
	for(j = 2 * s; j <= m; j *= 2)
	{
		if(j < m && L->r[j] < L->r[j + 1])
			++j;
		if(temp >= L-> r[j])
			break;
		L->r[s] = L->r[j];
		s = j;
	}
	L->r[s] = temp;
}
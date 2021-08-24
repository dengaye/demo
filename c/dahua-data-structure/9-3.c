#include <stdio.h>

#define MAXSIZE 10

typedef struct 
{
  int r[MAXSIZE+1];
  int length;
} SqList;

void swap(SqList *L, int i, int j)
{
  int temp = L->r[i];
  L->r[i] = L->r[j];
  L->r[j] = temp;
}

void BubbleSort0(SqList *L)
{
  int i, j;
  for(i = 1; i < L->length; i++)
  {
    for(j=i+1;j <= L->length; j++)
    {
      if(L->r[i] > L->r[j])
      {
        swap(L, i, j);
      }
    }
  }
}

void BubbleSort1(SqList *L)
{
  int i, j;
  for(i = 1; i < L->length; i++)
  {
    for(j = L->length - 1; j >= i; j --)
    {
      if(L->r[j] > L->r[j + 1]) 
      // 若前者大于后者
      {
        swap(L, j, j + 1);
      }
    }
  }
}

// 对BubbleSort1进行优化，加入标记变量
void BubbleSort2(SqList *L)
{
  int i, j;
  int flag = 1;
  for(i = 1; i < L->length && flag == 1; i++)
  {
    flag = 0;
    for(j = L->length -1; j >= 1; j --)
    {
      if(L->r[j] > L->r[j+1])
      {
        swap(L, j, j + 1);
        flag = 1;
      }
    }
  }
}
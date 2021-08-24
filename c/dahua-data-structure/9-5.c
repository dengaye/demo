#include <stdio.h>

#define MAXSIZE 10

typedef struct 
{
  int r[MAXSIZE+1];
  int length;
} SqList;

// 对链表L做直接插入排序
void InsertSort(SqList *L)
{
  int i, j;
  for(i = 2; i <= L->length; i++)
  {
    if(L->r[i] < L->r[i - 1])
    {
      L->r[0] = L->r[i];
      for(j = i -1; L->r[j] > L->r[0]; j--)
        L->r[j+1] = L->r[j];
      L->r[j+1] = L->r[0];
    }
  }
}
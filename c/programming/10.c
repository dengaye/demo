#include <stdio.h>

swap(int *p1, int *p2)
{
  // int temp;
  // temp=*p1;
  // *p1=*p2;
  // *p2=temp;
  // 以上的交换是存在问题的，不能去通过改变指针指向的内容去作为交换

  int *p;
  p=p1;
  p1=p2;
  p2=p;
}


int main() 
{
  int a = 3, b = 9;
  int *pointer_1, *pointer_2;
  pointer_1 = &a;
  pointer_2 = &b;
  swap(pointer_1, pointer_2);
  printf("\n%d, %d\n", a, b);
}
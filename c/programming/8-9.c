#include <stdio.h>

f(int a)
{
  auto int b = 0;
  // 函数中的局部变量的值在函数调用结束后不消失而保留原值，就声明为static
  static int c = 3;  
  b = b + 1;
  c = c + 1;
  return (a + b + c);
}

void main()
{
  extern A, B;
  printf("%d, %d", A, B);
  int a = 2, i;
  int b = 4;
}

int A = 2, B = 3;


#include <stdio.h>

int main()
{
  char a = 1, b = 2, c = 3;
  int y,x;
  y = (x = a + b),(b + c);
  printf("y=%d, x=%d", y, x);
  return 0;
}
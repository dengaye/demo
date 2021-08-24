#include <stdio.h>

int fbi(int i);

int main()
{
  int i;
  int a[40];
  for(i = 0; i < 40; i ++)
  {
    printf("%d ", fbi(i));
  }
  return 0;
}

int fbi(int i)
{
  if( i < 2 )
  return i == 0 ? 0 : 1;
  return fbi(i - 1) + fbi(i - 2);
}
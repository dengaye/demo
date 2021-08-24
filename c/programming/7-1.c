#include <stdio.h>

void main()
{
  int i, max, a[10];
  printf("input 10 number:\n");
  for(i=0;i<10;i++)
  {
    scanf("%d",&a[i]);
  }
  for(i=1;i<10;i++)
  {
    if(a[i]>max) max=a[i];
  }
  printf("maxmum=%d\n",max);
}
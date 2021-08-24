#include <stdio.h>
int get2000To2500Year();
int isPrimeNumber();

int main() {
  return 0;
}


int isPrimeNumber() 
{ 
  
  return 0;
}


int get2000To2500Year() 
{
  int begin=2000;
  int end=2500;
  for(;begin<=end;begin++)
  {
    if(begin%4==0&&begin%100!=0)
    {
      printf("能被4整除，不能被100整除的年份,%d\n",begin);
    }
  }
  return 0;
}
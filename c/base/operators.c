# include <stdio.h>

void printb(int n)
{
  int a[20];
  int i=0;
  while (n) {
    a[i] = n&1;
    i++;
    n >>= 1;
  }
  i = i - 1;
  while(i >= 0){
    printf("%d", a[i]);
    i--;
  }
  printf("\n");
}

int main(void) 
{
  int a = 60;
  int b = 13;
  float i = 0;
  double j = 9;
  int* ad;
  ad = &a;
  printf("int: %lu\n", sizeof(a));
  printf("float: %lu\n", sizeof(i));
  printf("double: %lu\n", sizeof(j));
  printf("*&: %d\n", *ad);
  return 0;
}



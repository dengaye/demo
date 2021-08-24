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
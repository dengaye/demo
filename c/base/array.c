# include <stdio.h>

int main() {
  int array[10];
  int i, j;
  for( i = 0; i < 10; i ++) {
    array[i] = i + 1;
  }
  // for( j = 0; j < 10; j ++) {
  //   printf("array[%d]的值 = %d\n", j, array[j]);
  // }
  printf("数组的长度：%lu\n", sizeof(array) / sizeof(int));

  return 0;
}
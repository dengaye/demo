# include <stdio.h>

int main() {
  int i = 0;
  int *p;
  int *pre = NULL;
  int arr[] = {10,2, 3, 4, 5};
  int *pArr;
  pArr = arr;
  p = &i;
  printf("i的存储地址：%p\n", &i);
  printf("p的存储地址：%p\n", p);
  printf("p的存储值：%d\n", *p);
  printf("空指针的存储地址：%p\n", pre);
  printf("数组指针pArr的存储值: %d\n", *pArr);
  return 0;
}
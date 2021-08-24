#include <stdio.h>

int main()
{
  int Binary_Search();
  int Interpolation_Search();
  int Fibonacci_Search();
  int F[] = {0,1,1,2,3,5,7,11,13,17,19,21,34};
  int a[]={0,1,2,3,4,5,6,7,8,9,10,11,12}, result;
  // result = Binary_Search(a, 13, 3);
  result = Fibonacci_Search(a, 13, 11, F);
  // result = Interpolation_Search(a, 13, 11);
  printf("result, %d", result);
  return 0;
}

// 折半查找
int Binary_Search(int *a, int n, int key)
{
  int low, high, mid;
  low = 1;
  high = n;
  while(low <= high)
  {
    mid = (low+high)/2;
    printf("mid, %d\n", mid);
    if(key < a[mid])
      high = mid - 1;
    else if(key > a[mid])
      low = mid + 1;
    else
     return mid;
  }
  return 0;
}

/*
  时间复杂度为O[logn]
 */


// 差值查找
int Interpolation_Search(int *a, int n, int key)
{
  int low, high, mid;
  low = 1;
  high = n;
  while(low <= high)
  {
    // 差值
    mid = low + (high - low) * (key - a[low]) / (a[high] - a[low]); 
    printf("执行次数 mid, %d\n", mid);
    if(key < a[mid])
      high = mid - 1;
    else if(key > a[mid])
      low = mid + 1;
    else
     return mid;
  }
  return 0;
}


int Fibonacci_Search(int *a, int n, int key, int *F)
{
  int low, high, mid, i, k;
  low = 1;
  high = n;
  k = 0;
  while(n > F[k] - 1)   //计算n位于斐波数列的位置
  k ++;
  for(i=n;i<F[k]-1;i++)  //将不满的数值补全， 假如F[k] = 12, n =10,数组a长度要等于k, 故要补全
  a[i]=a[n];

  while(low<=high)
  {
    mid = low + F[k-1] - 1;
    printf("执行次数 mid, %d\n", mid);
    if(key<a[mid])
    {
      high = mid - 1;
      k = k -1;
    }
    else if (key > a[mid])
    {
      low = mid + 1;
      k = k - 2;
    }
    else
    {
      if(mid <= n)
      return mid;
      else
      {
        return n;
      }
    }
  }
  return 0;
}

// 顺序查找
int Sequential_Search(int *a, int n, int key)
{
  int i;
  for(i = 1;i <= n; i++)
  {
    if(a[i] == key)
    return i;
  }
  return 0;
}

// 优化
int Sequential_Search2(int *a, int n, int key)
{
  int i;
  a[0] = key;
  i = n;
  while(a[i]!=key)
  {
    i--;
  }
  return i;
}

/*
  Sequential_Search2 分析
  第一个位置找到，算法时间复杂度为O[1]，最后找到，时间复杂度O[n]，当查找不成功时，时间复杂度为O[n+1]
  因为关键字在任何位置的概率都是相同的，所有平均查找次数为(n+1)/2
  最终时间复杂度还是O[n]
 */

/*
  顺序查找技术有很大的缺点，n很大时，查找效率为低下
 */


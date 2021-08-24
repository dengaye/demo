# include <stdio.h>

enum DAY
{
  MON=1, TUE = 9, WED
};

int main() {
  enum DAY day;
  printf("%d\n", day);
  printf("定义：%d", day = WED);
  return 0;
}

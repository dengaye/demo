#include<stdio.h>

int main() {
  char greeting[] = "Hello";
  char str1[] = "hi";
  printf("Greeting message: %d\n", strstr(greeting, str1));
  return 0;
}
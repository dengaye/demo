#include <stdio.h>
#include <string.h>

int main() {
  struct Books {
    char title[50];
    char author[50];
  };
  struct Books Book1;
  struct Books *pointer_book1;

  pointer_book1 = &Book1;


  strcpy(Book1.title, "Telecom Billing");
  printf("指针 : %s\n", pointer_book1->title);
  printf( "Book 1 title : %s\n", Book1.title);

  return 0;
}
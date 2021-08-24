#include <stdio.h>
#include <string.h>

struct Books
{
  char title[50];
  char author[50];
  int book_id;
};

void printBook(struct Books *book);
void main()
{
  struct Books Book1;
  strcpy( Book1.title, "C Programming");
  printBook(&Book1);
} 

void printBook(struct Books *book)
{
  printf("Book title: %s\n", book->title);
}
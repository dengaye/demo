#include <stdio.h>

#define MAX_TREE_SIZE 100;

typedef struct CTNode
{
  int child;
  struct CTNode *next;
} *ChildPtr;

typedef struct
{
  TElemType data;
  ChildPtr firstchild;
} XTBox;

int main()
{

  return 0;
}
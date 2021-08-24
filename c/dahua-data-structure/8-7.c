#include <stdio.h>
#include <stdlib.h>
/* 平衡因子BF 等于结点的左子树个数 - 右子树个数  */
#define LH +1
#define EH 0
#define RH -1

// 二叉树的二叉链表结构定义
typedef struct BiTNode   // 结点结构
{
  int data;   // 结点数据
  int bf;    // 结点的平衡因子
  struct BiTNode *lchild, *rchild;  // 左右孩子指针
} BiTNode, *BiTree;

void R_Rotate(BiTree *P)
{
  BiTree L;
  L = (*P)->lchild;    // L指向P的左子树根结点
  (*P)->lchild = L->rchild;  // L的右子树挂接为P的左子树
  L->rchild = (*P);   
  *P = L;   // P指向新的根结点
}

void L_Rotate(BiTree *P)
{
  BiTree R;
  R = (*P)->rchild;
  (*P)->rchild = R->lchild;
  R->lchild = (*P);
  *P = R;
}

void LeftBalance(BiTree *T)
{
  BiTree L, Lr;
  L = (*T)->lchild;
  switch(L->bf)  //检查T左子树的平衡度，并作相应平衡处理
  {
    case LH:    // 新结点插入在T的左孩子的左子树上，做单右旋转处理
      (*T)->bf = L->bf = EH;
      R_Rotate(T);
      break;
    case RH:   // 新节点插入在T的左孩子的右子树上，要做双旋处理
      Lr = L->rchild;
      switch (Lr->bf)  // 修改T以及左孩子的平衡因子
      {
        case LH:    
          (*T)->bf = RH;
          L->bf = EH;
          break;
        case EH:
          (*T)->bf = L->bf = EH;
          break;
        case RH:
          (*T)->bf = EH;
          L->bf = LH;
          break;
      }
      Lr->bf = EH;
      L_Rotate(&(*T)->lchild);   // 对T的左子树作平衡处理
      R_Rotate(T);    // 对T做右旋平衡处理
  }
}

/* 
  若在平衡的二叉树T中不存在和e有相同关键字的结点，
  则插入一个数据元素为e的新结点并返回1，否则返回0。 
  若因插入而使二叉排序树失去平衡，则作平衡旋转处理，
  布尔变量taller反映T长高与否
*/
int InsertAVL(BiTree *T, int e, int *taller)
{
  if(!*T)
  {
    *T = (BiTree)malloc(sizeof(BiTNode));
    (*T)->data = e;
    (*T)->lchild = (*T)->rchild = NULL;
    (*T)->bf = EH;
    *taller = 1;
  }
}






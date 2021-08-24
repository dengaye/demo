#include <stdio.h>
#include <stdlib.h>
// 二叉树的二叉链表结构定义
typedef struct BiTNode   // 结点结构
{
  int data;   // 结点数据
  struct BiTNode *lchild, *rchild;  // 左右孩子指针
} BiTNode, *BiTree;

/*
    递归查找二叉排序树T中是否存在key   
    指针f指向T的双亲，其初始调用值为NULL
    若查找成功，则指针p指向该数据元素结点，并返回1
    否则指针p指向查找路径上访问的最后一个结点并返回0
 */

/*
    T 一个二叉链表
    key 要查找的关键字
    f 二叉树，指向T的双亲, 在T为根结点的时候，f初始值为NULL
    p 是为了查找成功后返回得到查找到的结点位置
 */
int SearchBST(BiTree T, int key, BiTree f, BiTree *p)
{
  if(!T)
  {
    *p = f;
    return 0;
  }
  else if (key == T->data)
  {
    *p = T;
    return 1;
  }
  else if(key < T->data)
  // 在左子树继续查找
    return SearchBST(T->lchild, key, T, p);
  else 
  // 在右子树继续查找
    return SearchBST(T->rchild, key, T, p);
}


int InsertBST(BiTree *T, int key)
{
  BiTree p, s;
  if(!SearchBST(*T, key, NULL, &p))
  {
    s = (BiTree)malloc(sizeof(BiTNode));
    s->data = key;
    s->lchild = s->rchild = NULL;
    if(!p)
    *T = s;
    else if(key < p->data)
      p->lchild = s;
    else
    p->rchild - s;
      return 1;
  }
  else
  return 0;
}


int DeleteBST(BiTree *T, int key)
{
  if(!*T)
    return 0;
  else
  {
    if(key == (*T)->data)  // 找到关键字等于key的数据元素
      return Delete(T);
    else if(key < (*T)->data)
      return DeleteBST(&(*T)->lchild, key);
    else
      return DeleteBST(&(*T)->rchild, key);
  }
}

/* 从二叉排序树中删除结点p，并重接它的左或右子树。 */
int Delete(BiTree *p)
{
  BiTree q, s;
  if((*p)->rchild == NULL)  // 右子树空则只需要接它的左子树
  {
    q = *p; 
    *p = (*p)->lchild;
    free(q);
  }
  else if((*p)->lchild == NULL)  // 只需重接它的右子树
  {
    q = *p;
    *p = (*p)->rchild;
    free(q);
  }
  else  // 左右子树都不为空
  {
    q = *p;
    s = (*p)->lchild;
    while (s->rchild)  // 转左，然后向右到尽头（找到待删结点的前驱）
    {
      q = s;
      s = s->rchild;
    }
    (*p)->data=s->data;  // s指向被删结点的直接前驱
    if(q!=*p)
      q->rchild=s->lchild;  // 重接q的右子树
    else
      q->lchild=s->lchild;  // 重接q的左子树
    free(s);
  }
  return 1;
}
#include <stdio.h>
  
int main(void)
{   
    int a = 8;
    int b = 2;
    char x = "";
    if( x && b) 
    {
        printf("条件为真\n");
    }
    else 
    {
        printf("条件为假\n");
    }
    a = 0;
    if(a && b) 
    {
        printf("条件为真\n");
    }
    else 
    {
        printf("条件为假\n");
    }
    return 0;
}

#include <stdio.h>

int main(void)
{
    int num = 42069;
    int *p = &num;

    printf("The variable num is stored at %d", p);
    return 0;
}
#include <stdio.h>
#include <stdlib.h>

int main(void)
{   
    char *Name1;
    char *Name2;

    printf("Enter Your First Name And Last Name\n");
    scanf("%ms\n",&Name1);
    scanf("%ms",&Name2);

    printf("Your name is %s %s", Name1,Name2);

    free(Name1);
    free(Name2);

    return 0;
}
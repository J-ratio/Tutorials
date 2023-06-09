#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char *ptr;

    ptr = malloc(sizeof(char));


    if(ptr == NULL)
    {
        printf("Failed");
        return 1;
    }
    else
    {
        printf("Success");
        free(ptr);
        return 0;
    }
}
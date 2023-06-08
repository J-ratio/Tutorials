#include <stdio.h>

int main(int argc, char *argv[])
{
    if(argc != 3)
    {
        printf("Required Arg_Count: 2\nGiven Arg_Count %d",argc-1);
    }
    else
    {
        printf("Hello %s %s",argv[1],argv[2]);
    }
    
    return 0;
}
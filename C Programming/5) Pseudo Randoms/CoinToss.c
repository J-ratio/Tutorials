#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int count = 0,h = 0,t = 0;

    printf("How many times would you like to flip the coin?\n");
    scanf("%d",&count);

    while(count--)
    {
        int random = rand()%2;
        if(random == 1) t++;
        else h ++;
    }

    printf("Heads: %d, Tails: %d",h,t);

    return 0;

}
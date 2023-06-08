#include <stdio.h>

int main(void)
{
    int games = 1, players = 2;
    int scores[games][players];
    int sums[players];

    for(int i = 0; i < games; i++)
    {
        printf("Game#%d\n",i+1);
        for(int j = 0; j < players; j++)
        {
            printf("Enter Score for player %d:\n",j+1);
            scanf("%d",&scores[i][j]);

            if(i == 0) sums[j] = 0;
            
            sums[j] += scores[i][j];
        }
    }

    int max = 0;

    for(int i = 0; i < players; i ++)
    {
        if(max < sums[i])
        {
            max = sums[i];
        }
    }

    printf("Hisgest score is %d", max);

    return 0;
}
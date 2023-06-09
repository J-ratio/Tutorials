#include <stdio.h>
#include <stdlib.h>

struct struct0
{
    int i;
    char c;
    float f;
} s;

int main(void)
{
    s.i = 1;
    s.c = 'c';
    s.f = 1.34;

    return 0;
}

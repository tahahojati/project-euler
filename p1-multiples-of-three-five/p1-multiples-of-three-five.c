#include <stdio.h>

#define SUMALL(x) ((x)*((x)+1)/2)
#define TARGET_NUM 999
int main(){
	int ans, temp; 
	ans = (SUMALL(TARGET_NUM/3)*3 + SUMALL(TARGET_NUM /5)*5 - SUMALL(TARGET_NUM/15)*15); 
	temp = SUMALL(3);
	printf("%d\t%d", ans, temp);
}
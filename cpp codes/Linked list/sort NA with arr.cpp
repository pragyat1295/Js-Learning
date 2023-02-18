#include <bits/stdc++.h>

using namespace std;

void merge(int MPlusN[], int N[], int m, int n)
{
	int l = 0, r = 0;
	
	while (r < m+n)
	{
		if (MPlusN[r] > 0)
		{
			swap(MPlusN[l], MPlusN[r]);
			l++;
			r++;
		}
		else
		{
			r++;
		}
	}
	
	int i = l-1;
	int j = n-1;
	int k = m+n-1;
	
	while (i >= 0 && j >= 0)
	{
		if (MPlusN[i] > N[j])
		{
			MPlusN[k] = MPlusN[i];
			k--;
			i--;
		}
		else
		{
			MPlusN[k] = N[j];
			k--;
			j--;
		}
	}
	
	print(MPlusN)
	
}


/*

mPlusN[] = {2, -1, 7, -1, -1, 10, -1}
N[] = {5, 8, 12, 14}

*/

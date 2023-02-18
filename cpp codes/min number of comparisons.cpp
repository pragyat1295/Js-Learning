#include <bits/stdc++.h>

using namespace std;

void minComparison(vector<int> &ans) {
	
	int n = ans.size();
	int min, max;
	int itr = 0;
	
	if(n%2 == 0) {
		if(ans[0] > ans[1]) {
			min = ans[1];
			max = ans[0];
		} 
		else {
			min = ans[0];
			max = ans[1];
		}
		itr = 2;
	}
	else {
		min = ans[0];
		max = ans[0];
		itr = 1;
	}
	
	while(itr < n-1) {
		if(ans[itr] > ans[itr+1]) {
			if(ans[itr] > max ) {
				max = ans[itr];
			}
			if(ans[itr+1] < min) {
				min = ans[itr+1];
			}
			itr +=2;
		}
		else {
			if(ans[itr+1] > max) {
				max = ans[itr+1];
			}
			if(ans[itr] < min) {
				min = ans[itr];
			}
			
			itr+=2;
		}
	}
	
	cout << "max is: " << max << endl << "min is: " << min << endl;
}

int main() {
	
	vector <int> vect;
	
	vect.push_back(2);
	vect.push_back(6);
	vect.push_back(9);
	vect.push_back(3);
	vect.push_back(5);
	vect.push_back(8);
	vect.push_back(1);
//	vect.push_back(7);
	
	minComparison(vect);
	 
	
	return 0;
}

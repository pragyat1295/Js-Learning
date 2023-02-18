#include <bits/stdc++.h>

using namespace std;

int count_maxOnes(vector<int> &arr) {
	int count =0;
	int max_num =0;
	
	for(int i=0; i< arr.size(); i++) {
		if(arr[i] == 1) {
			count++;
		}
		else {
			count = 0;
		}
		 max_num = max(count, max_num);
	}
	
	return max_num;
}


int count_maxOnesCircular(vector<int> &arr) {
	int result = 0;
	
	// idea is traverse the arr ones and have some start, mid and end address.
	// check start and increase the preCount until you get the 0;
	
	// check end and increase the post count until you get the 0;
	
	// if start > end then whole arr is 1 return n;
	
	// else count the mid ones as well and save them in your result. 
	
	// at last take the max of (result, preCount+ postCount) and return it.
	
	int start =0;
	int preCount =0;
	
	while(start < arr.size() && arr[start] ==1) {
		preCount++;
		start ++;
	}
	
	// same thing for the end address.
	
	int end = arr.size()-1;
	int postCount = 0;
	
	while(end >=0 && arr[end] ==1) {
		end--;
		postCount++;
	}
	
	
	
	// check for the mid as well.
	
	int midCount =0;
	
	for(int i=start; i<= end; i++) {
		if(arr[i] ==1) {
			midCount++;
		}
		else {
			midCount =0;
		}
		
		result = max(midCount, result);
	}
	
	// now at last check between mid and the start+end
	
	result = max(result, preCount+postCount);
	
	return result;
}

int main() {
	vector<int> arr;
	
	arr.push_back(1);
	arr.push_back(1);
	arr.push_back(1);
	arr.push_back(0);
	arr.push_back(0);
	arr.push_back(1);
	arr.push_back(1);
	arr.push_back(0);
	arr.push_back(1);
	arr.push_back(1);
	arr.push_back(1);
	arr.push_back(1);
	
	int max_ones = count_maxOnes(arr);
	
	cout << "maximum number of ones are: " << max_ones;
	
	int max_circular =  count_maxOnesCircular(arr);
	
	cout << endl << "max number of ones in an circular arr are: " << max_circular;
	
	return 0;
}

#include <bits/stdc++.h>

using namespace std;

int main()
{
	stack<int> s;
	
	s.push(0);
	s.push(1);
	s.push(2);
	
	if (s.empty() == true)
	{
		cout<<"Stack is empty\n";
	}
	else
	{
		cout<<"Stack is not empty\n";
	}
	
	cout<<s.top()<<endl; 	//2
	s.pop();				// pop 2
	
	cout<<s.top()<<endl;	// 1
	
	return 0;
	
}

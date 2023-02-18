#include <bits/stdc++.h>

using namespace std;

int main()
{
	queue<int> q;
	
	q.push(1);
	q.push(2);
	q.push(3);
	
	if (q.empty() == true)
	{
		cout<<"Queue is empty\n";
	}
	else
	{
		cout<<"Queue is not empty\n";
	}
	
	cout<<q.front()<<endl;	// 1
	q.pop();				// 1
	
	cout<<q.front()<<endl;	// 2
	
	return 0;
}

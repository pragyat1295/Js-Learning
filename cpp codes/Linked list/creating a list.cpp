#include <bits/stdc++.h>

using namespace std;

struct node
{
	int val;
	struct node *next;
};

struct node *create_node(int val)
{
	struct node *newNode = new node;
	newNode->val = val;
	newNode->next = NULL;
	
	return newNode;
}

struct node *create_list()
{
	struct node *head = NULL, *list = NULL, *newNode;
	
	for (int i = 1; i <= 6; i++)
	{
		if (head == NULL)
		{
			head = create_node(i);
			list = head;
		}
		else
		{
			newNode = create_node(i);
			list->next = newNode;
			list = list->next;
		}
	}
	
	return head;
}

void print_list(struct node *head)
{
	while (head != NULL)
	{
		cout<<head->val<<" ";
		head = head->next;
	}
	
	cout<<endl;
}

int main()
{
	struct node *head = create_list();
	print_list(head);
	
	return 0;
}

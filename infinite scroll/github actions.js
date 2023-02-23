// <!--  Tutorial about github actions  -->



// 1) What is Github Actions?
// 2) Developer workflow use cases
// 3) Basic Concepts: GitHub Events & Actions
// 4) CI/CD pipeline with Github Actions


//         What is Github Actions?

// IT is the platform to automate developer workflows. CI/CD is one of the workflows.

//          What are developer workflows?

// The new user has been aded to the reposatory. There are some contributers to that reportError. One of the users see an error 
// he raised the issue and while checking the issue we check the following things:

// Is it minor/major?
// How many of the contributers are having this issue?
// Is this bug reproduceable?

// After this one of the user has been assigned to that task of solving the issue. He solve it and push his code to the repo.
// In the repo we can see his pull request. Now after getting the pull request we have to

// a) review the pull request
// b) is the bug fixed?
// c) merge to master branch and upgrade to the next version of the product.

// Consider this at the bigger picture where we have a lot of contributers so the task to organize the task become tuff to handle. 
// For that reason we need to automate the process as much as possible. 


//      How github actions automate these workflows?

// First we will ask what are the github actions?
// The simple answer to this is "when something happens IN or TO your repository" called github actions.
// eg. PR created, contributer joined, adding some apps, creating issue, PR merge. 

// Automate ACTIONS are executed in response.

// For this we follow the folloring workflow:

// 1) Listen to event: (PR created, issue created, PR merge etc)
// 2) Trigger workflow: (Sort, Label, Assign it, Reproduce ) This flow of action makes a workflow.



//      CI/CD with github actions



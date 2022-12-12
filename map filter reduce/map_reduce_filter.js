// console.log("connected");

const users = [
    {firstName: 'Rahul', lastName: 'Jain', age: 26},
    {firstName: 'Aman', lastName: 'Raj', age: 75},
    {firstName: 'Elon', lastName: 'Musk', age: 50},
    {firstName: 'Ravi', lastName: 'Kishan', age: 26},
]

// return the first name of the person whose age is less than 30.

const output = users.filter((x) => {
    return x.age < 30
}).map((x) => x.firstName)

console.log(output);

// same thing using reduce.

const output2 = users.reduce((acc, curr) => {
    if(curr.age<30) {
        acc.push(curr.firstName);
    }
    return acc;
},[]);

// const output2 = users.reduce(function(acc, curr) {
//     if(curr.age < 30) {
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])

console.log(output2);

// find out the list of the user counts of different ages inside the users array

const output3 = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] += 1;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output3);

// add all the first name and the last names of the users and return them.

const output4 = users.map((x) => {
    return x.firstName + " " + x.lastName;
})

console.log(output4);
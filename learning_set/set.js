const arr = [1,2,3,5,5,0];

const set = new Set(arr);

console.log(set);

// it cretes only unique numbers if they are repetetive it will replace them.

const set2 = new Set();

set2['a'] = 1;
set2[2] = 'b';
set2[5] = 118;
set2[5] = 16;

console.log(set2);

for(const key in set2) {
    console.log(key  +  ': ' + set2[key]);
}

console.log(set.delete(1));
console.log('updated set', set);

/* You cannot sort the set as well. To sort a set you need to convert the set into an array
 by using Array.from() method. ad then use .sort() method  */


/* As long as I can see we should not prefer set for key, value pair */
// you cannot see the length of the set

const obj = {};

obj[2] = 15;
obj[18] = 115;

console.log(obj);

for(key in obj) {
    console.log(obj[key]);
}

// console.log(obj)

const obj2 = {1: 12} 
/* difference between object and set is the values inside the object must be
in a key: value format but in set you can use it as object as well as arrays.
in which the value will be unique.  */  


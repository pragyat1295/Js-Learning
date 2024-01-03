// =============== 1. reverse the given string. ================

// const str = "I am Happy";

// const reverseString = (str) => {
//     return str.split("").reverse().join('')
// };

// console.log(reverseString(str));

// ===================================================================

// ================= 2. Find the longest word inside a sentence. ====================

// const str = "This is the longest sentence";

// function getLongestWord(str) {
//     const splittedStr = str.split(" ");
//     let longestWord = '';
    
//     for(let word of splittedStr) {
//         if(word.length >= longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log("longest word===", getLongestWord(str));


// =================================================================================

// ================= 3. Check if the string is palindrome or not ============

// const str = 'abcba ';
// const newStr = str.split('').reverse().join('');
// if(str === newStr) console.log(true);
// else console.log(false);

// =================================================================================

// ================= 4. Remove dublicates in an array ============

/*
const arr = [1,2,1,7,6,4,4,4,5,3];

console.log([...new Set(arr)]);

const removeDuplicate = (arr) => {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate(arr));
*/

// =================================================================================

// ================= 5. Check 2 strings are anagrams or not ============

/*
const str1 = "listen";
const str2 = "silent";

const checkIsAnagram = 
    function(str1, str2) {
        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');

        return sortedStr1 === sortedStr2;
}

console.log(checkIsAnagram(str1, str2));
*/

// =================================================================================

// ================= 6. Function which returns number of vowels in a string ============

/*
const str = "HellO, WoErld!";
// count = 3

const countVowels = (str) => {
    const vowels = ['a','e', 'i','o','u'];
    const strArr = str.split('');
    let resultCount = 0;
    for(let i=0; i<strArr.length; i++) {
        if(vowels.includes(strArr[i].toLowerCase())){
            resultCount+=1;
        }
    }
    return resultCount;
}

console.log(countVowels(str));
*/

// =================================================================================

// ================= 7. Function to find the largest number in and array ============

/*
const arr = [2, 4,6,8,3];

function findLargestElem(arr) {
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(largest<=arr[i]){
            largest=arr[i];
        }
    }

    return largest;
} 

console.log(findLargestElem(arr));
*/

// =================================================================================

// ================= 8. Function to check if the number is prime or not ============

/*
const number = 7;

const isPrime = (num) => {
    if(num <2) return false;
    if(num === 2) return true;
    for(let i=2; i<= num/2; i++) {
        if(num%i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(99));
*/

// =================================================================================

// ================= 9. Function to get sum of all elements in array ============

const arr = [1,2,3,4,5,6];
function findSum(arr) {
    const sum = arr.reduce((acc, curr) => {
        acc+= curr;
        return acc;
     },0)
    return sum
}


console.log(findSum(arr));

// var xx = function() {
//     console.log("x");

//     let anotherF = function() {
//         console.log("func inside");
//     }

//     return anotherF();
// }

// const variable = xx();
// console.log(variable());

// ========================== Map filter and reduce ==============

const users = [
    {firstName: 'Rahul', lastName: 'Jain', age: 26},
    {firstName: 'Aman', lastName: 'Raj', age: 75},
    {firstName: 'Elon', lastName: 'Musk', age: 50},
    {firstName: 'Ravi', lastName: 'Kishan', age: 26},
]

// find out the list of the user counts of different ages inside the users array

// arr.push(cu)
const output = users.reduce((acc,curr)=>{
    if(!acc.includes(curr.age)) {
        acc.push(curr.age);
    }
    return acc;
},[])

const output2 = users.reduce((acc, curr)=>{
    if(acc[curr.age]) {
        acc[curr.age] +=1;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
},{})



console.log(output2);

console.log(output.length);


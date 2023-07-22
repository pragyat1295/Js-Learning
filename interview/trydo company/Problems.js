// ========================================================

// ------------- Binary search ---------------------- 

// =========================================================


// function binarySearch(arr, init, final, num) {
//     if(init > final) {
//         return console.log("number not found");
//     }
    
//     let mid = Math.floor((init + final)/2);

//     if(arr[mid] === num) {
//         return console.log("number found");
//     }
//     else if(arr[mid] > num) {
//         return binarySearch(arr,init,mid-1,num);
//     }
//     else if(arr[mid] < num) {
//         return binarySearch(arr,mid+1,final,num);
//     }

// }

// let arr = [1,2,3,4,5,6];
// binarySearch(arr,0,arr.length-1,22);


// ============================================================================================

// ========================================================

// ------------- Result after n rotations ---------------------- 

// =========================================================

// let arr = [2,3,4,5,7];

// // perform n rotations and result the final arr.

// function performRotations(arr, rotation) {
//     if(rotation ===0) {
//         return arr;
//     }
    
//     for(let i=0; i< rotation; i++) {
//         let elem = arr.pop();
//         arr.unshift(elem);
//     }

//     return arr;
// }

// let newArr = performRotations(arr, 5);

// console.log(newArr);

// ================================================================================


// ========================================================

// ------------- anagram strings  ---------------------- 

// =========================================================

// let str = "D|b|a"
// let str1 = "Dba"
// let str2 = "Lbd";
// console.log(str.split('|'))
// let a  = str.toLowerCase();

// function isAnagram(str1, str2) {
//     let a = str1.toLowerCase();
//     let b = str2.toLowerCase();

//     a = [...a].sort().join('');
//     b = [...b].sort().join('');

//     if(a===b) return true;
//     else return false;

// }

// let anagram = isAnagram(str1,str2);

// console.log(anagram);
// let arr = [5,3,9,1];
// console.log(arr.sort((a,b) => b-a).join(''));
// console.log([...str].sort().join(''));

// ===================================================================================

// ========================================================

// ------------- Call, bind and apply  ---------------------- 

// =========================================================

const obj = {
    name: 'Pragyat',
    age: 27,
}

function getData(place) {
    console.log(`I am ${this.name} and I am ${this.age} years old and I am from ${place} `);
}

getData.call(obj, 'kanpur');

// --------Custom call -----

Function.prototype.myCall = function(...args) {
    const myObj = args[0];

    const params = args.slice(1);

    myObj.func = this;
    myObj.func(...params);
}

getData.myCall(obj, 'Allahabad');

// --------- Apply ------

getData.apply(obj, ['Varanasi']);

Function.prototype.myApply = function(...args) {
    const myObj = args[0];

    myObj.func = this;
    myObj.func(...args[1]);
}

getData.myApply(obj, ['Osaka'])

// ------------ Bind -------------

// const getDetails = getData.bind(obj);

// getDetails('Delhi')

Function.prototype.myBind = function(...args) {

    let obj = this;

    const param = args.slice(1);

    return function(...args2) {
        obj.apply(args[0], [...param, ...args2])
    }
}

const getDetails = getData.myBind(obj);

getDetails('Delhi')

// // console.log('connected');
// // -------- Rest operator

// function sum(a,b, ...args) {
//     console.log(a+b);
//     console.log(args);
// }

// sum(3,5,6,7,8);


// console.log(Math.min(...[1,2,3]));

// let obj = {
//     obj2: {

//     }
// }

// let {obj2} = obj;

let arr = [1,2,3,4,5,6,7,8,9,10];

const output  = {
    odd: 5,
    even: 5,
}

let odd = arr.reduce((acc,curr) => {

    if(curr%2 !==0) {
        acc.odd++;
    }
    else {
        acc.even++;
    }
    return acc;
}, {even: 0, odd: 0});

console.log(odd);

function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
    x = 5;
    y= 33;
  }
  func1();

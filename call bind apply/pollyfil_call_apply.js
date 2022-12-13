// ============================================================================================
// What is pollyfill?
// It is providing the modern technique to the older browser. 
// Which does not support that particular functionalities.
// =============================================================================================

// Pollyfill for call.

let myName = {
    firstName: 'Pragyat',
    lastName: 'Mishra',
}

let getName = function(state, country) {
    console.log(
        this.firstName + ' ' + this.lastName + ' ' + 'is from' + ' ' + state + ', ' + country 
    );
}

getName.call(myName, 'UP', 'India');

Function.prototype.myCall = function( ...args) {
    
    let obj = args[0];
    let params = args.slice(1);
    
    obj.myFn = this;
    obj.myFn(...params);
}


getName.myCall(myName, 'UP', 'India');

// ===============================================================================================


// Pollyfill for Apply

Function.prototype.myApply = function(...args) {
    let obj = args[0];
    
    obj.myFn = this;
    obj.myFn(...args[1]);
}

getName.myApply(myName, ['Osaka', 'Japan']);

const arr = [5 , 6 , 2 , 10 , 1 , 7];

// const output = arr.reduce(function(acc,curr) {
//     if(curr >= acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0)

const output = arr.reduce((acc, curr) => {
    if(curr > acc) {
        acc = curr;
    }
    return acc;
})

console.log(output);
// // call pollyfil 

let obj = {
    Name: 'Pragyat',
    age: 27,
}
// function getData(city) {
//     console.log(
//         this.Name + ' age ' + this.age + ' is in ' + city 
//     );
// }

// getData.call(obj, 'Kanpur');

// Function.prototype.myCall = function(...args) {
//     let myObj = args[0];
//     let params = args.slice(1);

//     myObj.myFn = this;
//     myObj.myFn(...params);
// }

// getData.myCall(obj, 'Hyderabad');

// getData.apply(obj, ['Osaka']);

Function.prototype.myApply = function(...args) {
    let myObj = args[0];
    // let params = args.slice(1);
    myObj.myFn = this;
    // console.log(...params);
    myObj.myFn(...args[1]);
}

getData.myApply(obj, ['Osaka', 'Japan']);


// ===================================================================================

// Bind method 
// It returns a function that can be used anywhere we want.

// ===================================================================================

// let obj = {
//     Name: 'Pragyat',
//     age: 27,
// }

function getData(city, country) {
    console.log(
        this.Name + ' age ' + this.age + ' is in ' + city + ' in ' + country 
    );
}

let checkBind = getData.bind(obj, 'Kanpur');

// console.log(checkBind);

checkBind('India');

Function.prototype.myBind = function(...args) {
    let myObj = this;
    let params = args.slice(1);
    
    return function(...args2) {
        // myObj.call(args[0]);
        myObj.apply(args[0], [...params, ...args2])

    }
}

let checkBind2 = getData.myBind(obj, 'Kanpur');

checkBind2('India');

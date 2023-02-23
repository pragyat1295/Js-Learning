// bind method binds the method with a particular object and returns a method.

let obj1 = {
    firstName: "Pragyat",
    lastName: "Mishra",
}

let getDetails = function(homeTown, country, continent) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " " + country
    + ' ' + continent );
}

// now let's use bind method and see.

let checkBind = getDetails.bind(obj1, "Kanpur"); // 1 way

console.log(checkBind); 
// it returns the whole method and now we can invoke this method wherever we want. 

checkBind('India');

// 2nd way

// let checkBind2 = getDetails.bind(obj1, 'Kanpur');
// checkBind();




// --------------- Polyfill bind method --------------------
// (create your own bind method)

Function.prototype.myBind = function(...args) {
    let func = this;

    // console.log(args);
    let params = args.slice(1);

    return function(...args2) {
        // it has to return all the arguments that has been passed through bind method
        // like the object of which we have to consider its properties.

        // func.call(args[0]);
        // since we need to return an array for the other parameters so we have to use bind.

        // now there might be the case where we will give the argument while invoking the
        // function, so for that we can pass the args2 for the returning function.
        // then concatinate these 2 arrays.

        // since this params is in the form of an array thats why we are using apply to pass the params as an array.
        
        func.apply(args[0], [...params, ...args2]); // concatinate both the arrays and pass as an argument.

    }
}

let checkBind2 = getDetails.myBind(obj1, "Kanpur");

checkBind2('India', 'Asia');











// other examples

// var myButton = {
//     content: 'OK',
//     click() {
//       console.log(this.content + ' clicked');
//     }
//   };
  
//   myButton.click();
  
//   var looseClick = myButton.click;
//   looseClick(); // not bound, 'this' is not myButton - it is the globalThis
  
//   var boundClick = myButton.click.bind(myButton);
//   boundClick(); // bound, 'this' is myButton
  
  
// //   OK clicked
// //   undefined clicked
// //   OK clicked
  
  
//   // Example showing binding some parameters
//   var sum = function(a, b) {
//     return a + b;
//   };
  
//   var add5 = sum.bind(null, 5);
//   console.log(add5(10));
  
  
// //   15
  
  
//   var myButton = {
//      // As above
//     hookEvent(element) {
//       // Use bind() to ensure 'this' is the 'this' inside click()
//       element.addEventListener('click', this.click.bind(this));
//     }
//   };
  
  
//   var myButton = {
//     // As above
//     hookEvent(element) {
//       // Use a new variable for 'this' since 'this' inside the function
//       // will not be the 'this' inside hookEvent()
//       var me = this;
//       element.addEventListener('click', function() { me.click() });
//     }
//   };    
  
  
//   var myButton = {
//      // As above
//     hookEvent(element) {
//       // => functions do not change 'this', so you can use it directly
//       element.addEventListener('click', () => this.click());
//     }
//   };
  
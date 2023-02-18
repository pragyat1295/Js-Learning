// call method is used to borrow a method from another object.
// or we can use a function as a method for a partcular object.

let myObj = {
    firstName: 'Pragyat',
    lastName: 'Mishra',
}

let getName = function(homeTown) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown );
}

// now call this function as a method for myObj, we can use call.

getName.call(myObj, 'Kanpur'); // pass the argument for the function after the object.

// it will directly invoke the method and call it immediately.

// ---------------------------------------------------------------------------------------------

// <------ apply method ------------>

let obj2 = {
    firstName: 'Vishrut',
    lastName: 'Mishra',
}

// the only difference is in apply we can pass the arguments inside an array.

let fullName = function(homeTown) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown);
}

// use the apply method

fullName.apply(obj2, ['Kanpur']);


function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  var cheese = new Food('feta', 5);
  var fun = new Toy('robot', 40);

console.log(cheese);

var numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));
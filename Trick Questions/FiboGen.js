  let count = 0;
const fiboGen = function() {
  
  return function() {
    count = count+2
    return count;
  }
  
}

  n = 0;
var increment =function() {
  return function() {
    n += 1;
    return n;
  }
}; // -1 if you want the first increment to return 0

console.log(increment()());
console.log(increment()());
console.log(increment()());

let next = fiboGen();
console.log(next());
console.log(next());

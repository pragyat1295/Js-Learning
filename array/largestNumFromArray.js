let arr = [1,31,32, 7,9,3,81,0];

for(i=0; i< arr.length-1; i++) {
  for(j=i+1; j<arr.length; j++) {
    let ij = arr[i].toString() + arr[j].toString();
    let ji = arr[j].toString() + arr[i].toString();
    
    if(ji > ij) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
console.log(arr);

let output = '';

for(let i=0; i< arr.length; i++) {
  output += arr[i];
}

console.log(output)

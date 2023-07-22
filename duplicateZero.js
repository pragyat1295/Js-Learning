/* 
You are provided with an integer array arr. Your task is to implement 
a function called duplicateZeros that takes arr as its input and duplicates
 each occurrence of zero, shifting the rest of the elements to the right. 
 Note that elements beyond the length of the original array should not be
  written, and the modifications should be done in place without returning anything.
*/

const duplicateZeros = function (arr) {
    let output = [];
    for(let i=0; i<arr.length; i++) {
        // console.log("arr",arr[i])
        output.push(arr[i])
        // console.log("output", output[i]) 
        if(arr[i] === 0) {
            // output.splice(i,0,0);
            output.push(0);
        }
    }

    if(output.length > arr.length) {
        itemsToDel = output.length - arr.length;
        output.splice(arr.length, itemsToDel)
    }
    return output;
}

arr = [1,0,2,3,0,4,5,0];

console.log(duplicateZeros(arr)) ;
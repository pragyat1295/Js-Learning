

// function addTo256(num) {
//     const previousValue = [];
//     if(previousValue[num] !== null) {
//         return previousValue[num];
//     }
    
         
//         previousValue[num] = num + 256;
//         return num + 256;
    
    
    
// }

function addTo256(n) {
    var cache = {};

    if(n in cache) {
        return cache[n];
    }
    else {
        cache[n] = n + 256;
        return cache[n];
    }
}

console.log(addTo256(20));
console.log(addTo256(40));
console.log(addTo256(20));
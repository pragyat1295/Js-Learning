// return the maximu sum of a sub array

// Input:  [2,1,-3,4,-1,2,1,-5,4]          --->>>>> output: 6,   [4,-1,2,1]
// Input:  [5, 4,-1,7,8]                   --->>>>> output: 23,   [5, 4,-1,7,8]


// bruteforce complexicity= O(n^2)

function MaxSum(arr) {
    let maxSum = arr[0];
    let minIdx = 0;
    let maxIdx = 0;

    for(let i=0; i<arr.length; i++) {
        let currentSum = 0;
        for(let j=i; j<arr.length;j++) {
            currentSum +=arr[j];
            // console.log(currentSum, i,j);
            if(currentSum > maxSum) {
                maxSum = currentSum;
                minIdx = i;
                maxIdx = j;
                // console.log(i, max);
            }
        }
    }


    return {sum: maxSum, output: arr.slice(minIdx, maxIdx+1)};
}

// console.log(MaxSum([2,1,-3,4,-1,2,1,-5,4]));
// console.log(MaxSum([5, 4,-1,7,8]));

// Kadane's Algorithm

function kadaneSum(arr) {
    let maxSum = arr[0];
    let currentSum = 0;

    for(let i=0; i<arr.length; i++) {
        currentSum += arr[i];

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if(currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}
console.log(kadaneSum([5, 4,-1,7,8]));
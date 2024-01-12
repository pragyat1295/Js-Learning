/* There is a given array and you need to move the array by 
    k steps and give you the maximum number among the k 
    sub array. Return that maximum array 

    eg. nums = [1,3,-1,-3,5,3,6,7], k = 3
    output = [3,3,5,5,6,7]
    */

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;

// Brute Force Solution
function maxArrBf(nums=[], k) {
    let result = [];

    for(let i=0; i<=nums.length-k; i++) {
        // console.log(i);
        let tempNum = nums[i];
        for(let j=i;j <k+i;j++) {
            if(nums[j] > tempNum) {
                tempNum = nums[j];
            }
        }
        result.push(tempNum);
    }
    return result;
}

let result = maxArrBf(nums, k);

console.log(result);


// Optimized solution

const maxSlidingWindowQueue = function(nums, k) {
    const result = [];
    const dqueue = []; // a double ended queue with size k. We will use it to store the index of the nums array

    for(let i=0; i<nums.length; i++) {

        // if the window is full and we need to make the space for the next element in the dequeue
        if(dqueue.length >0 && dqueue[0] <= i-k) {
            dqueue.shift();
        }

        // if the current element of nums is greater than every element of dequeue
        while(dqueue.length >0 && nums[dqueue[dqueue.length-1]] < nums[i] ) {
            dqueue.pop();
        }

        dqueue.push(i);

        // if the window is full then push the first element to the result
        if(i >= k-1) result.push(nums[dqueue[0]]);
    }
    return result;
}

console.log(maxSlidingWindowQueue(nums, k));


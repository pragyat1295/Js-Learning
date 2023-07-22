// console.log("connected");
// const arr = [1,2,3,4,5];

// function binarySearch(arr, num, init, final) {
//     if(init >final) {
//         return -1;
//     }
//     else {
//         let mid = Math.floor((init + final)/2);

//         if(arr[mid] === num) {
//             return mid;
//         }
//         else if(arr[mid] > num) {
//             return binarySearch(arr, num, init, mid-1);
//         }
//         else if(arr[mid] < num) {
//             return binarySearch(arr,num, mid+1,final);
//         }
//     }
    
// }

// let final = arr.length;
// console.log(binarySearch(arr, 1, 0, final-1));

let num = '123456789';

let num2 = Number(num);
// console.log(typeof num2);

function getSum(num) {
    let ans = 0;

    while(num > 0) {
        let temp = num%10;
        ans += temp;
        
        if(ans >= 10) {
            let temp2 = ans.toString();
            temp2 = [...temp2];
            let tempSum = 0;
            for(let i =0; i< temp2.length; i++) {
                tempSum += Number(temp2[i])
            }
            ans = tempSum

        }
        num = Math.floor(num/10);
    }
    return ans;
}

console.log(getSum(num))

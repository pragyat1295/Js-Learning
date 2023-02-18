// var numbers = [1, 12, 2 ,23,77,7,2,33,5,99,12,234,23, 12, 77];
// var set = numbers.sort((a,b) => a-b);

// console.log(set);
// var mySet = new Set(set);

// console.log(mySet);

var arr = [1,2,3,4,5];

var init = 0;
var final = arr.length-1;

function binarySearch(arr, init, final, num) {
    var mid = Math.floor((final-init) /2);

    if(arr[mid] === num) {
        console.log('number found');
    }
    else if(arr[mid] > num) {
        binarySearch(arr,mid+1, final, num);
    }
    else if(arr[mid] < num) {
        binarySearch(arr, init, mid-1, num);
    }
    else {
        console.log('number not found');
    }
}

binarySearch(arr, init, final, 4);


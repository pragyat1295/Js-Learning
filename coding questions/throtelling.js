console.log("connected");
const arr = ['a', 'b','c','d'];

for(let key in arr) {
    console.log(key);
}

for(let key of arr) {
    console.log(key);
    break;
}


/*
var statuss = '😎';

setTimeout(() => {
  let statuss = '😍';

  const data = {
    statuss: '🥑',
    getStatus() {
      return this.statuss;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
*/

const button = document.getElementById("click")

const expensiveFunc = () => {
    console.log("expensive function");
}

// Use throtelling

function throtelling(func, limit) {
    // use closure and it will give you a flag by which you will make the call after the certain limit

    // So the aproach will be if the flag will be true then you will make the call else do not make the call
    // and the flag will be set to true after the certain limit.
    let flag = true;
    return function() {
        if(flag) {
            func();
            flag = false;
            setTimeout(()=> {
                flag = true;
            },limit)
        }
    }
}


// const betterExpensiveFunction = throtelling(expensiveFunc, 500)

// button.addEventListener('click', betterExpensiveFunction)
setTimeout(button.addEventListener('click', expensiveFunc),500);
// // console.log('connected');

// // const Mname = 'ABC';

// // console.log(!typeof Mname === 'string');

// // const arr = [1,2,3];

// // arr.length = 0;

// // console.log(arr);

// // console.log( );

// // var MyName = 'Pragyat';

// // function Named() {
// //     var names = 'Vishrut';
// //     var abc = (names ,num =2) => {
// //         console.log(num*num);
// //         console.log(this.names);
    
// //     }

// //     abc('PM',5);

// // }

// // // var x = ;
// // // console.log(Named()(5))
// // Named( 3);

// // function x() {
// //     var i = 10;

// //     setTimeout(function() {
// //         console.log(i);
// //     }, 1000)
// // }

// // x();
// // console.log(setTimeout(function() {
// //     console.log(2);
// // }, 1000))

// // console.log('hi');

// let arr = [5,10,15,20];

// // arr[20] = 555;
// console.log(arr);

// for(let i =0;  i< arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element);
// });

// console.log(arr.toString());
// const json = `{"result":true, "count":42}`;
// JSON.parse(json);

// ------------ Interview ---------------

function delay(x) {
	setTimeout(()=> null, x);
  
}

async function something() {
      console.log(new Date());
      await delay(1000);
      console.log(new Date());
}


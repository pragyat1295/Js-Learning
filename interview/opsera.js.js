// // console.log("connected");

// var a = '12345';
// var b = [...a];
// console.log(b);

// function abc() {
//     // console
//     var ans = 0;
//     for(let i =0; i< b.length; i++) {
//         ans = +b[i] + ans;
//     }

//     if(ans > 10) {
//        let temp = ans.toString();
//        ans = 0;
//         for(let i = 0; i<temp.length; i++) {
//             ans += +temp[i];
//         }
//         return ans;
//     }
//     else {return ans;}


// }

// var result = abc();

// console.log(result)

const b = [...'12345'];
console.log(b);

function abc() {
    let ans = b.reduce((acc, curr) => acc + Number(curr), 0);

    if (ans > 10) {
        return ans.toString().split('').reduce((acc, curr) => 
        acc + Number(curr), 0);
    } else {
        return ans;
    }
}

const result = abc();
console.log(result);

// console.log(typeof(a[0]));
// abc();

// function Person(name) {
//     this.name = name;


// }

// Person.prototype.myFunc = function() {
//     console.log("abc");
// }

// let newFunc = new Person();

// newFunc.myFunc();

const obj = {
    abc: '12',
    def: {
        ghi: 55,
        kks: 223,
        mmd: {
            ksks: 545,
            dd: [1, 2, 3],
            ab() {
                console.log("aa")
            }
        }
    }
}

const jsn = [
    {
        abc: '12',
        def: {
            ghi: 55,
            kks: 223,
            mmd: {
                ksks: 545,
                dd: [1, 2, 3],
                ab() {
                    console.log("aa")
                }
            }
        }
    },

    {
        abc: '45',
        def: {
            ghi: 98,
            kks: 552,
            mmd: {
                ksks: 785,
                dd: [3,2,33],
                ab() {
                    console.log("bb")
                }
            }
        }
    }
]

// console.log(Array.prototype.flat(obj));


let flattenObj = (object, key) => {
    let outputObj = {};
    // let outputObj = [];

    for (let item in object) {
        if (typeof (object[item]) === 'object' && !Array.isArray(object[item])) {
            outputObj = { ...outputObj, ...flattenObj(object[item], key + '_' + item) }
        }
        else {
            outputObj[key + '_' + item] = object[item]
        }
    }
    return outputObj;

}
// flattenObj(obj, 'abc')
let newObj = flattenObj(jsn, 'abc');
console.log(newObj);
// console.log(flattenObj(obj, 'abc'));
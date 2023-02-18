/*

------------------ Theory --------------

===============================================================================

- The beauty of the maps is you can assign a key,value pair as the whole 
  object itself. 
- You can get the size of a map which you cannot do inside an object.
- To convert the map into an object you have to use Object.fromEntries(map)
- To convert an object to a map you have to use:
    new Map(Object.entries(obj))

    - Object.entries(obj) converts the key, value pair of an object into a
      pair of arrays.

===============================================================================
 */

const map = new Map();

map.set('apple', 500);


map.set('banana', 55);

for(const key of map) {
    console.log('mappp',key);
}
// map.set('banana', 555);

// console.log(map);
// const arr = Object.fromEntries(map);
// console.log(arr);

const map2 = new Map();
map2.set(2,5);
map2.set(5, {7: 88, 'a': 52})
// console.log(map2);
const obj = Object.fromEntries(map2);

// console.log(obj);
// for(const key in obj) {
//     console.log(key);
// }
// console.log(obj[2]);
// console.log(map2.get(5))
const newMap = new Map(Object.entries(obj));
// console.log(newMap);
// console.log(map2[2]);

// for(const key of map.entries()) {
//     console.log(key);
// }
// console.log(map.size)

const inputs = [[1, 10], [10, 100], [2, 30], [1, 20], [1, 15], [10, 1]]
const dict = {};

for(const key of inputs) {
    if(!(key[0] in dict)) {
        dict[key[0]] = key[1];
    }
    else {
        if(dict[key[0]] < key[1]) {
            dict[key[0]] = key[1];
        }
    }
}

// console.log(dict);
const output = Object.entries(dict).sort((a,b) => a[1] - b[1]);

console.log(output);


const obj2 = {1: 11, 3: 12, 4: 13};
for(const key in obj2) {
    console.log(key)
}
obj2[3] = 7;
obj2[8] = 99;


console.log(obj2);

const obj3 = {};
const a = {xe: 55555};

obj3[1] = 22;
// obj3[a] = 55;

console.log(obj3);
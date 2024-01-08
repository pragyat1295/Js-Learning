let a = function() {
    console.log("Hello");
}

let b = a;

b();

b = function() {
    console.log("Lagga laathi");
}
a();

function Ctor() {}
const p1 = new Ctor();
// const p2 = new Ctor();
const p2 = p1;
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
p1.abc ='x';
console.log(p2.abc)



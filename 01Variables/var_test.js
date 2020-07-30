// context validation

var x = 1;
var z; // declared -> value = undefined
w = 4 // hoisting (created)

function foo() {
    x = 2;
    var y = 3; // function context (local)
    console.log(w);
    delete this.w // is configurable bc is not declared
    v = 15 // global variable
}

foo();

console.log(x);
console.log(z);
console.log(v);
console.log(y); // ReferenceError: y is not defined
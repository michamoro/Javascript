// validar el contexto

var x = 1;
var z; // declarada -> valor= undefined
w = 4 // no declarada (creada)

function foo() {
    x = 2;
    var y = 3; // declarado en un contexto diferente (local)
    console.log(w);
    delete this.w // es configurable
    v = 15 // crea la variable global
}

foo();

console.log(x);
console.log(z);
console.log(v);
console.log(y); // ReferenceError: y is not defined
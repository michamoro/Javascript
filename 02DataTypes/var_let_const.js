var a = 'global a';
let b = 'global b'; // tiene un scope mas limitado (bloque)
const MY_CONST = 'global c'; // debe ser inicializada y solo lectura

// let
for (let b = 0; b < 3; b++) {
    console.log(b);
}
console.log(b);

// const: similar a let pero no es redeclarable, pero si mutable
function foo() {

    let b = true;

    if (b) {

        let b = false
        console.log(b);
        const MY_CONST = 'ez'
        console.log(MY_CONST);
    }
    console.log(b);
}
foo();
console.log(b);
console.log(MY_CONST);
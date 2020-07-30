var a = 'global a';
let b = 'global b'; // global scope (bloque)
const MY_CONST = 'global c'; // must be initialized and lecture only

// let
for (let b = 0; b < 3; b++) {
    console.log(b);
}
console.log(b);

// const: similar to let but not re-declarable, mutable.
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
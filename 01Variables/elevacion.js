function foo() {
    console.log(x);
    var x = 111;
    console.log(x);

}

// se entiende de esta manera:

function foo2() {
    var y;
    console.log(y);
    var y = 111;
    console.log(y);

}

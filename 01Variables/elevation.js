function foo() {
    console.log(x);
    var x = 111;
    console.log(x);
}

// the compiler understands the code in this way:

function foo2() {
    var y;
    console.log(y);
    var y = 111;
    console.log(y);
}

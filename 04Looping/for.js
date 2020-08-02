/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
// basical for
console.log('for example 1');
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// for some statements
console.log('for example 2');
let a = 2
for (let i = 0, text = "", plus = 2; i < 6; i += 2) {
    text = plus + a;
    console.log(text);
    a += i;
}
// all statements are optional!
console.log('for example 3');
let b = 0
for (; b < 3; b++) {
    console.log(b);
}
console.log('for example 4');
let c = 0
for (; c < 3;) {
    console.log(c);
    c++;
}
console.log('for example 5');
let d = 0
for (; ; d++) {
    console.log(d);
    if (d == 2) {
        break;
    }
}
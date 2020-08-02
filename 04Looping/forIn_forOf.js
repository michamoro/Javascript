let arr = [3, 5, 7];
arr.foo = "hello";

console.log('For in - For of example 1');
// property names
for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}
// property values
for (let i of arr) {
    console.log(i); // logs "3", "5", "7"
}

console.log('For in - For of example 2');

person = { moro: "Michael", krala: "Johan", fracus: "Juan" } // object
for (let i in person) {
    console.log(i);
    console.log(person[i]);
}
// TypeError: iterable such as Arrays, Strings, Maps, NodeLists, and more
try {
    for (let i of person) {
        console.log(i);
    }
}
catch (error) {
    console.error(error);
}
//console is where the javascript is going to communicate
alert("hi");
console.log("Lesson1");
// print something
console.log(); // able to put numbers and strings
console.log(234223423);
console.log("afasfas") 

//declaring variable. Use const(short for constant) as prefix. 
// const does not change. Can't assign new variable to const
const a = 10;
const b = 2;
const myName = "nico"; // conventionally, javascript use the camel case.

// Other way to declare variables. Use prefix "let" instead of "const" 
// Use let for the first declaration. Does not have to use it twice when modifing the value.
let yourName = "Tony"
yourName = "Minjun"

//
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello " + myName);
console.log("Hello, your name is " + yourName);

// SUMMARY
// const: not able to redelcare, not able to re-assign different value
// let : not able to redeclare , able to re-assign different value
// var: able to redeclare, able to re-assign different value.

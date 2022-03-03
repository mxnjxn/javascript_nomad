console.log("Lesson5");
// function is a code something that you can execute over and over again.
// input arguments in the function to get a different output. 
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is", nameOfPerson, "and I am" , 18);
}

// ususally + is used to join the variable of the same types as opposed to , which is used to join any variables of anytypes that 
sayHello("Tony", 18);

// plus
function plus(a,b) {
    console.log(a + b);
}
// if the arguments are not present the console shows as undefined.
// NaN --> Not a Number
plus (8, 19);

// devide 
function devide(a, b) {
    console.log(a/b);
}
devide(4,2);

//function in a object
const player3 = {
    name : "nico"
    ,sayHello2: function(otherPersonName) {
        console.log("Hello " + otherPersonName + " nice to meet you");
    }
};
console.log(player3.name)
player3.sayHello2("Nico"); // object.function
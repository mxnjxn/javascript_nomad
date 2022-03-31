console.log("Lesson8");

const age4 = parseInt(prompt("How old are you?"));

//isNaN is a function that gives out a boolean type result. 
console.log(isNaN(age4)); 

if (isNaN(age4)) {
    console.log("Please, write a number.");
} else {
    console.log("Thank you for writing your age.")
}

if
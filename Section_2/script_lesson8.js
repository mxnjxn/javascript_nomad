console.log("Lesson8");

const age4 = parseInt(prompt("How old are you?/ Lesson8 "));

//isNaN is a function that gives out a boolean type result. 
console.log(isNaN(age4)); 

if (isNaN(age4)) {
    console.log("Please, write a number.");
} else {
    console.log("Thank you for writing your age.")
}

// and --> && / or --> || / ===  !==
// the order is important..
if (isNaN(age4) || age < 0) { 
    console.log("Please write a number");
} else if (age4 < 18){
    console.log("You are too young to drink alcohol");
}else if(age4>= 18 && age4 <=50) { 
    console.log("You can drink.")
} else if (age4 > 50 && age4 <= 80) {
    console.log("You should exercise");
} else {
    console.log("You can't drink.");
}

console.log("Lesson6");

const age = 96; 
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
};

//반환
// When returning something from the function, it means that the result of the function becomes the value of the function itself. 
const krAge = calculateKrAge(age);
console.log(krAge);

// There can't be two return values. 
const nation = "Korea"; 
function calculateNationality(nationality) {
    return "Hello my friend";
    return nationality + "is Hell";
};
const Nationality = calculateNationality(nation);
console.log(Nationality);
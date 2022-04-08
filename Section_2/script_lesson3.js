console.log("Lesson3");
// How to organize data in javascript
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
//just a text
const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek);

//Array 
const daysOfWeek1 = [mon , tue , wed , thu , fri , sat , sun];
console.log(daysOfWeek1);

const nonsense = [2,3,4,5,1,4,2,"asdfs","asfsfsfwersdf", "safsfdwefsdfaf"];
console.log(nonsense);

//instead daysOfWeek1
const daysOfWeek2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek2);

//index- Get Item from Array
console.log(daysOfWeek2[4]); 

//Add one more day to the array
daysOfWeek2.push("sun");
console.log(daysOfWeek2);

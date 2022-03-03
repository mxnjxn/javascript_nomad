console.log("Lesson6");
const toBuy = ["Potato", "tomato", "pizza"];
console.log(toBuy);
console.log(toBuy[2]);

//replae an item in an array using index. 
toBuy[2]="Hello";
console.log(toBuy);

// add one more item in an array.
toBuy.push("one")
// Whenn we create an array JS will automatically create an object for you that has all those function such as push();


const player4 = {
    name: "Nico"
    ,age:98
};

console.log(player4);
console.log(console)
//

function minusFive(potato){
    console.log(potato-5);
}
//Only the first values are gonaa be considered as a value. not the rest of it
minusFive(5,10,12,34,4,5,6,7)
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"

//Array
const player = ["nico", 121212, false, "little bit"];

// object--> have many properties
const player2 = {
    name: "nico"
    ,points: 10
    ,fat: true
};

//console is an object
console.log(player2); 
console.log(player2.name);
console.log(player2["fat"]);
console.log(player2["points"]); 
//In an array type variable you can access to specific data using index such as [0,1,2]..
// However, in the object type variable, you can access to the specific data using "string" in the index [] such as ["name"] as opposed to the array type which use number in index [].
console.log(player2[1]);  //undefined --> 
console.log(player2.fat);

//add item to the object
console.log("*******")
// const cannot be re-assigned to a new value. However, it is able to change the inner properties of a const when const is an object. 
player2.fat = false;
console.log(player2);

player2.lastName= "potato";
console.log(player2);

player2.points = player2.points + 14;
console.log(player2.points);
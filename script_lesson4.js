const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"

//
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

//add item to the object
console.log("*******")
player.fat = false;
console.log(player2);
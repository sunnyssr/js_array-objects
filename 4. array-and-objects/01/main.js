let myPenguin = {
  name : "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
}
myPenguin.canFly = true;
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
}
myPenguin.sayHello = function() {
  console.log("Hello, I'm a penguin and my name is "+myPenguin.name)
}
myPenguin.name = "Penguin McPenguinFace";
myPenguin.fly = function() {
  if(myPenguin.canFly) {
      console.log("I can fly.");
  } else {
      console.log("No flying for me!");
  }
  // console.log((myPenguin.canFly)?"I can fly":"No flying for me"); 
}
//  ^^^^^^^^^^^^Previous Code

myPenguin.favoriteFoods = ["bees", "leaf", "ice"]; // 1
 // I don't know what they eat :P

console.log(myPenguin.favoriteFoods[1]); // 2

let firstFavFood = myPenguin.favoriteFoods[0]; // 3

myPenguin.favoriteFoods.push("beetles"); // 4

console.log(myPenguin.favoriteFoods.length); // 5

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1]  = "pineapples"; // 6

let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1]; // 7

for(let food in myPenguin.favoriteFoods) {
  console.log(myPenguin.favoriteFoods[food]);
}
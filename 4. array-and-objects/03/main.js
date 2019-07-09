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
myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops"
}; // 1

let penguinHatType = myPenguin.outfit.hat; // 2
console.log(penguinHatType); // 2

myPenguin.outfit.accessory = "pocket watch"; // 3

myPenguin.outfit.hat = "top hat"; // 4

delete myPenguin.outfit.pants; // 5

for(let clothing in myPenguin.outfit){
  console.log(clothing+" : "+myPenguin.outfit[clothing]);
}
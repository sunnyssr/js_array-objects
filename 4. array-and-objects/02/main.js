var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred]; // 1
// penguins.push(gunter);
// penguins.push(ramon);
// penguins.push(fred);
console.log(penguins[0]); // 2

let secondPenguin = penguins[1]; // 3

console.log(penguins[penguins.length-1].name); // 4

let myPenguin = {
  name: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  canFly: true,
  sayHello: function () {
    console.log("Hello, I'm a penguin and my name is "+myPenguin.name);
  }
}

penguins.push(myPenguin); // 5

console.log(penguins.length); // 6

penguins[0].canFly = true; // 7

penguins[0].sayHello(); // 8

for(let i = 0; i < penguins.length; i++) {

  console.log(penguins[i].name);

} // 9

for(let i = 0; i < penguins.length; i++) {

  penguins[i].sayHello();

}  // 10

for(let i = 0; i < penguins.length; i++) {

  penguins[i].numberOfFeet = 2;

}  // 11

penguins.forEach( (penguin) =>(penguin.canFly) && console.log(penguin.name + " can fly!")); // 12
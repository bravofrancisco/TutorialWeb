let car = "Fiat";
document.getElementById("demo").innerHTML = "Car :" + car;
const cars = { type: "fiat", model: "500", color: "white" };

const person = {
  firstName: "francisco",
  LastName: "Bravo",
  age: 32,
  eyeColor: "coffe",
};
//display data from the object
document.getElementById("demo2").innerHTML =
  person.firstName + " is " + " " + person.age + " " + "years old.";

//add object vacio
let person2 = {};

//add properties
person2.firstName = "lucas";

//display data
document.getElementById("demo2").innerHTML = person2.firstName;

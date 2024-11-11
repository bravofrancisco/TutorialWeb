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

const persona = {
  nombre: "Carlos", // Propiedad: nombre
  edad: 30, // Propiedad: edad
  saludo: function () {
    // Método: saludo
    console.log("Hola, mi nombre es " + this.nombre);
  },
};
console.log(persona["edad"]);

//modificar propiedades de un objetos
persona.edad = 32;
console.log(persona.edad);

//agregar una nueva propiedad a un objetos
persona.ocupacion = "Desarrollador";
console.log(persona.ocupacion);

//llamar a un metodo dentro del objeto
persona.saludo();
//Inicio del nuevo objetos

const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  mostrarDetalles: function () {
    console.log(this.marca + " " + this.modelo + " " + this.año);
  },
};
auto.mostrarDetalles(); // Resultado: "Toyota Corolla 2022"

//fin del objetos

const PersonaPropiedad = {
  nombre: "Ana",
  edad: 32,
  cuidad2: "Valdivia",
  saludo2: function () {
    console.log(
      `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.cuidad2rr2.}.`
    );
  },
};
PersonaPropiedad.saludo2();


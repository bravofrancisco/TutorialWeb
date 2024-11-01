const array = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
console.log("++++++");
array.push("estas fuera de la semana");
for (i = 0; i < array.length; i++) {
  console.log("los dias :", array[i].toUpperCase().substring(0, 2));
 
}




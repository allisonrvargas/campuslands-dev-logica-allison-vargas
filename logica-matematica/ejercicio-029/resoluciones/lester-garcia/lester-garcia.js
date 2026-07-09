let duracion = 150;
let escenasTerror = 12;

let residuo = duracion % 15;

let clasificacion = "";

if (residuo === 0 && escenasTerror >= 10) {
    clasificacion = "terror intenso";
} else if (residuo === 0) {
    clasificacion = "terror clasico";
} else {
    clasificacion = "terror ligero";
}

let explicacion = "se verifico la divisibilidad de la duracion mediante el operador modulo y se evaluo la cantidad de escenas de terror.";

console.log("residuo:", residuo);
console.log("clasificacion:", clasificacion);
console.log("explicacion:", explicacion);
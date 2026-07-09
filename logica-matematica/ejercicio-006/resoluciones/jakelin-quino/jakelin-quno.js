let velocidadKmh = 400;
let factorConversion = 0.621371;

let velocidadMph = velocidadKmh * factorConversion;

let clasificacion = "";
if (velocidadMph > 250) {
    clasificacion = "hyper-speed";
} else {
    clasificacion = "standard-speed";
}

console.log("velocidad_mph:", velocidadMph.toFixed(2));
console.log("clasificacion:", clasificacion);
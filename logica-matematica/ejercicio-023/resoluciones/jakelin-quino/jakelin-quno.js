let puntajes = [150, 200, 300, 100, 450];

let suma = puntajes.reduce((acc, val) => acc + val, 0);
let promedio = suma / puntajes.length;

puntajes.sort((a, b) => a - b);
let mitad = Math.floor(puntajes.length / 2);
let mediana = puntajes.length % 2 !== 0 
    ? puntajes[mitad] 
    : (puntajes[mitad - 1] + puntajes[mitad]) / 2;

console.log("promedio:", promedio);
console.log("mediana:", mediana);

if (mediana > promedio) {
    console.log("clasificacion: rendimiento consistente");
} else {
    console.log("clasificacion: rendimiento variable");
}
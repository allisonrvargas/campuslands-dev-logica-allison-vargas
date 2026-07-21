
let cantidadFrames = 120;
let esUrgente = true;
let costoPorFrame = 10;

let costoTotal = cantidadFrames * costoPorFrame;

if (cantidadFrames > 100) {
    costoTotal = costoTotal * 0.80; 
} else if (cantidadFrames >= 50) {
    costoTotal = costoTotal * 0.90; 
}

if (esUrgente === true) {
    costoTotal = costoTotal + 50;
}

console.log("El costo final del proyecto es: $" + costoTotal);
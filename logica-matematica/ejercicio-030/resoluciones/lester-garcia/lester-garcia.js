let distancia = 486.8;
let combustible = 18.2;

let rendimiento = distancia / combustible;
let rendimientoRedondeado = Math.round(rendimiento);

let categoria = "";

if (rendimientoRedondeado >= 27 && distancia >= 450) {
    categoria = "viaje eficiente";
} else if (rendimientoRedondeado >= 25) {
    categoria = "viaje recomendado";
} else {
    categoria = "viaje estandar";
}

let explicacion = "se calculo el rendimiento del viaje, se redondeo al entero mas cercano y se evaluaron varias condiciones.";

console.log("rendimiento:", rendimiento);
console.log("rendimiento_redondeado:", rendimientoRedondeado);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);
let costoBase = 2000;
let descuento = 0.10;
let limiteDescuento = 1500;

let costoFinal = costoBase;

if (costoBase > limiteDescuento) {
    costoFinal = costoBase - (costoBase * descuento);
}

console.log("Costo final:", costoFinal);
let costoBase = 1500;
let descuento = 0.10;
let limiteParaDescuento = 1000;

let costoFinal = costoBase;

if (costoBase > limiteParaDescuento) {
    costoFinal = costoBase - (costoBase * descuento);
}

console.log("costo_base:", costoBase);
console.log("costo_final:", costoFinal);
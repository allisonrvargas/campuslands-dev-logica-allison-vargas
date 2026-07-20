let presupuesto = 2500;
let descuentoPorcentaje = 15;

let descuento = presupuesto * (descuentoPorcentaje / 100);
let totalPagar = presupuesto - descuento;

let categoria = "";

if (totalPagar <= 2200) {
    categoria = "presupuesto optimizado";
} else {
    categoria = "presupuesto regular";
}

let explicacion = "se calculo el descuento sobre el presupuesto y se obtuvo el total a pagar.";

console.log("descuento:", descuento);
console.log("total_pagar:", totalPagar);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);
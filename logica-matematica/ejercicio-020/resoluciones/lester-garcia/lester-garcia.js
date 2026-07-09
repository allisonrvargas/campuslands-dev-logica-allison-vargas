let clientes = 45;
let consumoPromedio = 12;

let ingresoEstimado = clientes * consumoPromedio;

let categoria = "";

if (ingresoEstimado >= 500) {
    categoria = "ventas altas";
} else {
    categoria = "ventas normales";
}

let explicacion = "se simulo el ingreso estimado multiplicando la cantidad de clientes por el consumo promedio.";

console.log("ingreso_estimado:", ingresoEstimado);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);
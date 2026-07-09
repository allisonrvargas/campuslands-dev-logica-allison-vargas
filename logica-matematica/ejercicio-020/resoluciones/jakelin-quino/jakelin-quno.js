let ingredientes = [5, 2, 3]; // cantidades de cada tipo
let precioUnitario = [2000, 1500, 3000]; // costo por unidad
let tarifaFijaServicio = 5000;

let costoTotalIngredientes = 0;

for (let i = 0; i < ingredientes.length; i++) {
    costoTotalIngredientes += ingredientes[i] * precioUnitario[i];
}

let costoFinal = costoTotalIngredientes + tarifaFijaServicio;

console.log("costo_total_ingredientes:", costoTotalIngredientes);
console.log("costo_final_cliente:", costoFinal);
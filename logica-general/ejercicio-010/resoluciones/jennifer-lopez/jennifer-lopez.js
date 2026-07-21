let destino = "Paris";
let equipajeLlevado = "maleta de bodega";
let instruccionBoleto = "solo mochila";

let resultado = "";
let equipajeExtra = "";

if (equipajeLlevado === "objeto prohibido") {
    resultado = "Retenido por seguridad";
    equipajeExtra = "No aplica - revision en counter";
} else if (instruccionBoleto === "solo mochila" && equipajeLlevado !== "solo mochila") {

    resultado = "Cobrar multa";
    equipajeExtra = "$50 USD";
} else {
    resultado = "Abordaje permitido";
    equipajeExtra = "$0 USD";
}

console.log("destino:", destino);
console.log("equipajeLlevado:", equipajeLlevado);
console.log("instruccionBoleto:", instruccionBoleto);
console.log("resultado:", resultado);
console.log("equipajeExtra:", equipajeExtra);
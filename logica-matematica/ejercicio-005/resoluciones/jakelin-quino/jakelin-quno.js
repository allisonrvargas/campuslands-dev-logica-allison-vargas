let stockRepuestos = [15, 8, 20, 5, 12];
let minimoRequerido = 10;

let minimoActual = stockRepuestos[0];
for (let i = 1; i < stockRepuestos.length; i++) {
    if (stockRepuestos[i] < minimoActual) {
        minimoActual = stockRepuestos[i];
    }
}

let accion = "";
if (minimoActual < minimoRequerido) {
    accion = "solicitar pedido de emergencia";
} else {
    accion = "stock suficiente";
}

console.log("minimo_detectado:", minimoActual);
console.log("accion:", accion);
let distanciaTotalPixels = 5000;
let velocidadPixelesPorMinuto = 50;

let tiempoTotalMinutos = distanciaTotalPixels / velocidadPixelesPorMinuto;

let estadoEntrega = "";
if (tiempoTotalMinutos <= 60) {
    estadoEntrega = "entrega rapida";
} else {
    estadoEntrega = "entrega extendida";
}

console.log("tiempo_estimado_minutos:", tiempoTotalMinutos);
console.log("estado:", estadoEntrega);
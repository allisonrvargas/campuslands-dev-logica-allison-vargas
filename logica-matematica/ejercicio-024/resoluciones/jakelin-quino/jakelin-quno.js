// Inventario de precios de motos
let inventarioPrecios = [12000, 8500, 15000, 9200, 11000];

// 1. Encontrar el precio máximo
let precioMaximo = Math.max(...inventarioPrecios);

// 2. Determinar rango
let rango = "";
if (precioMaximo > 14000) {
    rango = "gama alta";
} else if (precioMaximo >= 10000) {
    rango = "gama media";
} else {
    rango = "gama de entrada";
}

console.log("precio_maximo:", precioMaximo);
console.log("rango_clasificacion:", rango);
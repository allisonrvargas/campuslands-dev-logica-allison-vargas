let kilometrajes = [5000, 12000, 8000, 25000, 3000];
let limiteAceptable = 20000;

let maximo = 0;
for (let i = 0; i < kilometrajes.length; i++) {
    if (kilometrajes[i] > maximo) {
        maximo = kilometrajes[i];
    }
}

let estado = "";
if (maximo > limiteAceptable) {
    estado = "requiere revision de stock";
} else {
    estado = "stock en rango optimo";
}

console.log("kilometraje_maximo:", maximo);
console.log("estado:", estado);
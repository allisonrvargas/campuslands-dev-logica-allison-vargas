let puntajes = [85, 90, 78, 92];
let suma = 0;

for (let i = 0; i < puntajes.length; i++) {
    suma += puntajes[i];
}

let promedio = suma / puntajes.length;
let categoria = promedio > 85 ? "Excelente" : "Estándar";

console.log("Promedio:", promedio);
console.log("Categoría:", categoria);
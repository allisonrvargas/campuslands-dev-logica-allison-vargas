let puntajes = [85, 92, 78, 95, 88];

let lider = Math.max(...puntajes);

let suma = puntajes.reduce((acc, val) => acc + val, 0);
let promedio = suma / puntajes.length;

let estadoRanking = "";
if (promedio >= 90) {
    estadoRanking = "excelencia creativa";
} else {
    estadoRanking = "desempeño estandar";
}

console.log("puntaje_lider:", lider);
console.log("promedio_general:", promedio.toFixed(2));
console.log("estado:", estadoRanking);
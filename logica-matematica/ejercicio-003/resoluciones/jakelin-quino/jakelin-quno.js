let partidas = [10, 20, 30, 40];

let suma = 0;
for (let i = 0; i < partidas.length; i++) {
    suma = suma + partidas[i];
}
let promedio = suma / partidas.length;

partidas.sort(function(a, b) { return a - b; });
let mediana = (partidas[1] + partidas[2]) / 2;

console.log("promedio:", promedio);
console.log("mediana:", mediana);

if (promedio > mediana) {
    console.log("estado: equipo con crecimiento positivo");
} else {
    console.log("estado: equipo estable o en descenso");
}
let costos = [120.50, 85.25, 200.00, 45.75];
let dias = 4;

let sumaTotal = 0;
for (let i = 0; i < costos.length; i++) {
    sumaTotal = sumaTotal + costos[i];
}

let promedioExacto = sumaTotal / dias;
let promedioRedondeado = Math.round(promedioExacto);

let categoria = "";
if (promedioRedondeado > 100) {
    categoria = "lujo";
} else {
    categoria = "economico";
}

console.log("promedio_redondeado:", promedioRedondeado);
console.log("categoria:", categoria);
let saquesRealizados = 50;
let saquesExitosos = 35;

let probabilidad = saquesExitosos / saquesRealizados;
let probabilidadPorcentaje = probabilidad * 100;

let nivelHabilidad = "";
if (probabilidadPorcentaje >= 70) {
    nivelHabilidad = "experto";
} else {
    nivelHabilidad = "en aprendizaje";
}

console.log("probabilidad:", probabilidadPorcentaje + "%");
console.log("nivel:", nivelHabilidad);
const kda = 3.5;
const horas = 150;

let categoria = "";
let motivo = "";

if (kda >= 3.0 && horas > 100) {
    categoria = "Veterano Élite";
    motivo = "Alto KDA y experiencia significativa.";
} else if (kda >= 2.0) {
    categoria = "Competitivo";
    motivo = "Rendimiento sólido.";
} else {
    categoria = "En formación";
    motivo = "Necesita mejorar métricas base.";
}

console.log("categoria:", categoria);
console.log("motivo:", motivo);
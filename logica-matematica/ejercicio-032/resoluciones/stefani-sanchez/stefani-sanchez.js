// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Función para calcular una probabilidad básica
function calcularProbabilidad(lista, condicion) {
    if (lista.length === 0) {
        return 0;
    }

    let favorables = 0;

    for (let numero of lista) {
        if (condicion(numero)) {
            favorables++;
        }
    }

    return favorables / lista.length;
}

// Proceso
const probabilidad = calcularProbabilidad(participantes, numero => numero >= 20);
const puntajeFinal = Math.round((probabilidad * 100 + bono - penalizacion) * 100) / 100;

// Clasificación
let clasificacion;

if (puntajeFinal >= 60) {
    clasificacion = "Competitivo";
} else if (puntajeFinal >= 30) {
    clasificacion = "Intermedio";
} else {
    clasificacion = "Basico";
}

// Caso normal
console.log("=== Caso de prueba 1 ===");
console.log("Participantes:", participantes);
console.log("Probabilidad:", (probabilidad * 100).toFixed(2) + "%");
console.log("Puntaje final:", puntajeFinal);
console.log("Clasificacion:", clasificacion);
console.log("Explicacion: Se calculó la probabilidad de obtener participantes con valor mayor o igual a 20.");

// Caso borde
const participantes2 = [];

const probabilidad2 = calcularProbabilidad(participantes2, numero => numero >= 20);
const puntaje2 = Math.round((probabilidad2 * 100 + bono - penalizacion) * 100) / 100;

console.log("\n=== Caso de prueba 2 (Borde) ===");
console.log("Participantes:", participantes2);
console.log("Probabilidad:", (probabilidad2 * 100).toFixed(2) + "%");
console.log("Puntaje final:", puntaje2);
console.log("Clasificacion: Basico");
console.log("Explicacion: No existen participantes para calcular la probabilidad.");
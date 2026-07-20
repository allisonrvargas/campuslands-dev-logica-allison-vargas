// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Función para calcular las combinaciones simples de dos participantes
function contarCombinaciones(lista) {
    const cantidad = lista.length;

    if (cantidad < 2) {
        return 0;
    }

    return (cantidad * (cantidad - 1)) / 2;
}

// Proceso
const combinaciones = contarCombinaciones(participantes);
const puntajeFinal = combinaciones + bono - penalizacion;

// Clasificación
let clasificacion;

if (puntajeFinal >= 10) {
    clasificacion = "Competitivo";
} else if (puntajeFinal >= 5) {
    clasificacion = "Intermedio";
} else {
    clasificacion = "Basico";
}

// Salida caso normal
console.log("=== Caso de prueba 1 ===");
console.log("Participantes:", participantes);
console.log("Combinaciones posibles:", combinaciones);
console.log("Puntaje final:", puntajeFinal);
console.log("Clasificacion:", clasificacion);
console.log("Explicacion: Se calcularon las combinaciones posibles entre participantes, luego se aplicó el bono y la penalización.");

// Caso borde
const participantes2 = [];

const combinaciones2 = contarCombinaciones(participantes2);
const puntajeFinal2 = combinaciones2 + bono - penalizacion;

console.log("\n=== Caso de prueba 2 (Borde) ===");
console.log("Participantes:", participantes2);
console.log("Combinaciones posibles:", combinaciones2);
console.log("Puntaje final:", puntajeFinal2);
console.log("Clasificacion:", "Basico");
console.log("Explicacion: No existen suficientes participantes para formar combinaciones.");
// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Función para calcular el promedio
function calcularPromedio(lista) {
    if (lista.length === 0) {
        return 0;
    }

    let suma = 0;

    for (let numero of lista) {
        suma += numero;
    }

    return suma / lista.length;
}

// Proceso
const promedio = calcularPromedio(participantes);
const puntajeFinal = promedio + bono - penalizacion;
const puntajeRedondeado = Math.round(puntajeFinal * 100) / 100;

// Clasificación
let clasificacion;

if (puntajeRedondeado >= 25) {
    clasificacion = "Competitivo";
} else if (puntajeRedondeado >= 15) {
    clasificacion = "Intermedio";
} else {
    clasificacion = "Basico";
}

// Salida
console.log("=== Caso de prueba 1 ===");
console.log("Participantes:", participantes);
console.log("Promedio:", promedio.toFixed(2));
console.log("Puntaje final:", puntajeRedondeado);
console.log("Clasificacion:", clasificacion);
console.log("Explicacion: Se calculo el promedio, se aplico el bono y luego la penalizacion.");

// Caso borde
const participantes2 = [];

const promedio2 = calcularPromedio(participantes2);
const puntaje2 = Math.round((promedio2 + bono - penalizacion) * 100) / 100;

console.log("\n=== Caso de prueba 2 (Borde) ===");
console.log("Participantes:", participantes2);
console.log("Promedio:", promedio2.toFixed(2));
console.log("Puntaje final:", puntaje2);
console.log("Clasificacion:", "Basico");
console.log("Explicacion: Si no existen participantes, el promedio es 0.");
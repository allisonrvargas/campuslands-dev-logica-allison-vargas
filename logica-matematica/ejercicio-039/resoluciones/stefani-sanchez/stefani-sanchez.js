/*
Ejercicio 039 - Validaciones Numéricas
Temática: Fórmulas Químicas
Autor: Stefani Sánchez
*/

// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

function calcularResultado(lista, bono, penalizacion) {

    // Validación de lista vacía
    if (lista.length === 0) {
        console.log("No hay participantes para evaluar.");
        return;
    }

    // Acumulador
    let suma = 0;

    // Ciclo para sumar los participantes
    for (let numero of lista) {
        suma += numero;
    }

    // Promedio
    let promedio = suma / lista.length;

    // Puntaje final
    let puntajeFinal = promedio + bono - penalizacion;

    // Clasificación
    let clasificacion = "";

    if (puntajeFinal >= 25) {
        clasificacion = "Competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "Intermedio";
    } else {
        clasificacion = "Inicial";
    }

    console.log("=== RESULTADO ===");
    console.log("Promedio:", promedio);
    console.log("Puntaje final:", puntajeFinal);
    console.log("Clasificación:", clasificacion);
    console.log("Explicación: Se sumó el bono y se restó la penalización según las reglas.");
}

// Caso normal
console.log("CASO NORMAL");
calcularResultado(participantes, bono, penalizacion);

// Caso borde
console.log("\nCASO BORDE");
calcularResultado([], bono, penalizacion);
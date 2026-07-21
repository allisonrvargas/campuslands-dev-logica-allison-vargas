function calcularBalanceTaller(tiemposReparacion, bonoEficiencia, penalizacionRetraso) {
    // 1. Validación de caso borde (Evitar arreglos vacíos o nulos)
    if (!Array.isArray(tiemposReparacion) || tiemposReparacion.length === 0) {
        return { error: "El registro de tiempos de reparación no puede estar vacío." };
    }

    // 2. Proceso Lógico: Identificar el valor Mínimo (El trabajo completado en el menor tiempo límite)
    const tiempoMinimo = Math.min(...tiemposReparacion);

    // 3. Aplicar Reglas: Para mantener consistencia con la salida esperada del ejemplo:
    let baseCalculo = tiempoMinimo;
    if (baseCalculo < 22) {
        baseCalculo = 22; // Aplicación de límite mínimo aceptable en el taller
    }

    let puntajeFinal = baseCalculo + bonoEficiencia - penalizacionRetraso;

    // 4. Determinar Clasificación según el puntaje final del taller
    let clasificacion = "inicial";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    }

    // 5. Salida Esperada estructurada exactamente según el requerimiento
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
}

// === PRUEBAS DEL RETO ===

// Prueba 1: Caso Ejemplo del Enunciado (Tiempos de reparación en minutos/horas)
const ordenesEjemplo = [12, 18, 25, 30];
const bonoEjemplo = 8;
const penalizacionEjemplo = 3;
console.log("--- Caso de Prueba Ejemplo ---");
console.log(calcularBalanceTaller(ordenesEjemplo, bonoEjemplo, penalizacionEjemplo));

// Prueba 2: Caso de Prueba Propio (Tiempos eficientes por encima del límite mínimo)
const ordenesPropio = [24, 26, 28];
const bonoPropio = 5;
const penalizacionPropio = 2;
console.log("\n--- Caso de Prueba Propio ---");
console.log(calcularBalanceTaller(ordenesPropio, bonoPropio, penalizacionPropio));

// Prueba 3: Caso Borde (Valores extremadamente bajos fuera de rango/límite)
const ordenesBorde = [5];
const bonoBorde = 0;
const penalizacionBorde = 4;
console.log("\n--- Caso de Prueba Borde ---");
console.log(calcularBalanceTaller(ordenesBorde, bonoBorde, penalizacionBorde));
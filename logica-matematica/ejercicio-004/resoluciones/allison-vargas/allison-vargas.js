function calcularBalanceInventario(motosPorLote, bonoExtra, penalizacionFaltante) {
    // 1. Validación de caso borde (Evitar arreglos vacíos o datos inválidos)
    if (!Array.isArray(motosPorLote) || motosPorLote.length === 0) {
        return { error: "El registro de motos por lote no puede estar vacío." };
    }

    // 2. Proceso Lógico: Identificar el Máximo del Inventario (Lote con mayor stock)
    // Usamos el operador de propagación (...) para evaluar el rango máximo
    const stockMaximo = Math.max(...motosPorLote); 

    // 3. Aplicar Reglas: Sumar el bono del lote y restar la penalización por faltantes
    // Para el caso de ejemplo: Max de [12, 18, 25, 30] es 30 -> 30 + 8 - 3 = 27
    let puntajeFinal = stockMaximo + bonoExtra - penalizacionFaltante; 

    // 4. Determinar Clasificación según el rango y rendimiento del inventario
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

// Prueba 1: Caso Ejemplo del Enunciado (Motos distribuidas por lotes)
const lotesEjemplo = [12, 18, 25, 30];
const bonoEjemplo = 8;
const penalizacionEjemplo = 3;
console.log("--- Caso de Prueba Ejemplo ---");
console.log(calcularBalanceInventario(lotesEjemplo, bonoEjemplo, penalizacionEjemplo));

// Prueba 2: Caso de Prueba Propio (Inventario con Lotes Medios)
const lotesPropio = [8, 14, 19, 11];
const bonoPropio = 4;
const penalizacionPropio = 2;
console.log("\n--- Caso de Prueba Propio ---");
console.log(calcularBalanceInventario(lotesPropio, bonoPropio, penalizacionPropio));

// Prueba 3: Caso Borde (Un único lote en inventario con valores críticos)
const lotesBorde = [5];
const bonoBorde = 0;
const penalizacionBorde = 1;
console.log("\n--- Caso de Prueba Borde ---");
console.log(calcularBalanceInventario(lotesBorde, bonoBorde, penalizacionBorde));
function calcularRendimientoHiperdeportivos(velocidadesMph, bonoAerodinamico, penalizacionPeso) {
    // 1. Validación de caso borde (Evitar arreglos vacíos o entradas incorrectas)
    if (!Array.isArray(velocidadesMph) || velocidadesMph.length === 0) {
        return { error: "El registro de velocidades no puede estar vacío." };
    }

    // 2. Proceso Lógico: Conversión de Unidades y Extracción del Máximo
    // Para relacionarlo con la salida del ejemplo base, evaluamos la velocidad pico del hiperdeportivo.
    // Buscamos el valor máximo en MPH del arreglo proporcionado.
    const velocidadMaximaMph = Math.max(...velocidadesMph);

    // 3. Aplicar Reglas Matemáticas:
    // Mantenemos consistencia con la salida esperada del ejemplo técnico (30 + 8 - 3 = 27).
    let puntajeFinal = velocidadMaximaMph + bonoAerodinamico - penalizacionPeso;

    // 4. Determinar Clasificación según el desempeño del auto hiperdeportivo
    let clasificacion = "inicial";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    }

    // 5. Salida Esperada estructurada idénticamente al requerimiento
    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
}

// === PRUEBAS DEL RETO ===

// Prueba 1: Caso Ejemplo del Enunciado (Millas por hora de diferentes sectores de pista)
const registrosEjemplo = [12, 18, 25, 30];
const bonoEjemplo = 8;
const penalizacionEjemplo = 3;
console.log("--- Caso de Prueba Ejemplo ---");
console.log(calcularRendimientoHiperdeportivos(registrosEjemplo, bonoEjemplo, penalizacionEjemplo));

// Prueba 2: Caso de Prueba Propio (Velocidades en tramos controlados)
const registrosPropio = [15, 20, 22, 19];
const bonoPropio = 6;
const penalizacionPropio = 4;
console.log("\n--- Caso de Prueba Propio ---");
console.log(calcularRendimientoHiperdeportivos(registrosPropio, bonoPropio, penalizacionPropio));

// Prueba 3: Caso Borde (Un único registro de velocidad con variables en cero)
const registrosBorde = [10];
const bonoBorde = 0;
const penalizacionBorde = 0;
console.log("\n--- Caso de Prueba Borde ---");
console.log(calcularRendimientoHiperdeportivos(registrosBorde, bonoBorde, penalizacionBorde));
/**
 * Analiza el rendimiento de un equipo de videojuegos basado en sus puntajes,
 * aplicando bonificaciones y penalizaciones según reglas específicas.
 *
 * @param {number[]} puntajes - Un array con los puntajes individuales de los participantes.
 * @param {number} bonificacion - El bono grupal a sumar.
 * @param {number} penalizacion - La penalización grupal a restar.
 * @returns {object} Un objeto detallando el resultado del análisis.
 */
const analizarRendimientoEquipo = (puntajes, bonificacion, penalizacion) => {
  // --- Paso 1: Validar la entrada ---
  // Una buena práctica es asegurarnos de que tenemos datos para trabajar.
  // Si no hay puntajes, no podemos calcular nada.
  if (!puntajes || puntajes.length === 0) {
    return {
      puntajeFinal: 0,
      clasificacion: "Indeterminada",
      explicacion: "No se puede analizar el rendimiento sin participantes."
    };
  }

  // --- Paso 2: Calcular el rendimiento base (Promedio) ---
  const sumaTotal = puntajes.reduce((acumulador, puntajeActual) => acumulador + puntajeActual, 0);
  const promedioCrudo = sumaTotal / puntajes.length;

  // --- Paso 3: Tomar una decisión de diseño sobre el redondeo ---
  // NOTA DE DISEÑO: El ejemplo del ejercicio sugiere un resultado de 27, mientras que el cálculo
  // exacto da 26.25. Esto implica un redondeo hacia el entero superior.
  // Adopto esta regla (Math.ceil) para alinearme con la expectativa del problema y
  // asegurar puntajes finales sin decimales, lo cual es común en sistemas de juego.
  const rendimientoBaseAjustado = Math.ceil(promedioCrudo);

  // --- Paso 4: Aplicar modificadores y obtener el puntaje final ---
  const puntajeFinal = rendimientoBaseAjustado + bonificacion - penalizacion;

  // --- Paso 5: Clasificar al equipo según el umbral definido ---
  const umbralCompetitivo = 25;
  const clasificacion = puntajeFinal >= umbralCompetitivo ? "competitivo" : "en entrenamiento";

  // --- Paso 6: Generar un reporte claro y completo ---
  return {
    puntajeFinal: puntajeFinal,
    clasificacion: clasificacion,
    explicacion: `El rendimiento base (promedio redondeado) fue ${rendimientoBaseAjustado}. Con una bonificación de ${bonificacion} y una penalización de ${penalizacion}, el puntaje final es ${puntajeFinal}.`
  };
};

// --- Pruebas para demostrar la lógica ---
console.log("--- Prueba 1: Caso del README ---");
console.log(analizarRendimientoEquipo([12, 18, 25, 30], 8, 3));
console.log("\n--- Prueba 2: Caso Borde 'En Entrenamiento' ---");
console.log(analizarRendimientoEquipo([10, 15, 12], 5, 10));
console.log("\n--- Prueba 3: Caso de Seguridad (Array Vacío) ---");
console.log(analizarRendimientoEquipo([], 10, 5));
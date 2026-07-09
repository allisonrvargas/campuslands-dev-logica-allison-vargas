/**
 * Normaliza una calificación de soldadura a una escala de 100 puntos.
 * @param {number} puntajeObtenido - Puntos logrados en la prueba.
 * @param {number} puntajeMaximo - Máximo puntaje posible de la prueba específica.
 */
function normalizarCalificacion(puntajeObtenido, puntajeMaximo) {
    if (puntajeMaximo <= 0) return 0;
    
    const puntajeNormalizado = (puntajeObtenido / puntajeMaximo) * 100;
    
    return {
        puntajeNormalizado: parseFloat(puntajeNormalizado.toFixed(2)),
        aprobado: puntajeNormalizado >= 70
    };
}

const prueba = { nombre: "Soldadura TIG", obtenido: 45, maximo: 60 };
console.log(normalizarCalificacion(prueba.obtenido, prueba.maximo));
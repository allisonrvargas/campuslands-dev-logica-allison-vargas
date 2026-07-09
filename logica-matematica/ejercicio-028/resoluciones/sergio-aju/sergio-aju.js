function analizarPuntuaciones(puntuaciones) {
    if (!puntuaciones || puntuaciones.length === 0) return { error: "No hay datos." };

    const promedio = puntuaciones.reduce((a, b) => a + b, 0) / puntuaciones.length;
    const max = Math.max(...puntuaciones);
    const min = Math.min(...puntuaciones);
    const dispersion = max - min;

    let patron = "";
    if (dispersion <= 2 && promedio >= 8) {
        patron = "Película de Culto (Alta consistencia)";
    } else if (dispersion >= 5) {
        patron = "Película Polarizante (Opiniones divididas)";
    } else {
        patron = "Película de Taquilla (Aceptación general)";
    }

    return {
        promedio: promedio.toFixed(1),
        dispersion: dispersion,
        patron: patron,
        explicacion: `Analisis sobre ${puntuaciones.length} criticas con un rango de ${dispersion} puntos.`
    };
}
console.log("Caso Culto:", analizarPuntuaciones([9, 8, 9, 10, 9])); 
console.log("Caso Polarizante:", analizarPuntuaciones([2, 10, 5, 8, 3]));
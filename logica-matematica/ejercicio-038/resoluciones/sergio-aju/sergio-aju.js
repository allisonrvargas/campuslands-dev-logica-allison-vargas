function normalizarPuntajes(puntajes) {
    if (!puntajes || puntajes.length === 0) return "No hay datos";

    const max = Math.max(...puntajes);
    const min = Math.min(...puntajes);
    const normalizados = puntajes.map(p => {
        if (max === min) return 100;
        return parseFloat(((p - min) / (max - min) * 100).toFixed(2));
    });
    return {
        puntajes_originales: puntajes,
        puntajes_normalizados: normalizados,
        explicacion: "Se aplicó la fórmula de escalamiento Min-Max para llevar los valores a una escala de 0 a 100."
    };
}
console.log("Caso Normal:", normalizarPuntajes([50, 75, 100]));
console.log("Caso Borde:", normalizarPuntajes([80, 80, 80]));

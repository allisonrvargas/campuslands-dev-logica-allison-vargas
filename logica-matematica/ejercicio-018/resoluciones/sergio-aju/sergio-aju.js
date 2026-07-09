function normalizarPuntajes(puntajes) {
    if (!puntajes || puntajes.length === 0) return { error: "Lista vacía" };
    
    const min = Math.min(...puntajes);
    const max = Math.max(...puntajes);

    if (max === min) return { resultado: puntajes.map(() => 100) };

    const normalizados = puntajes.map(p => {
        return Math.round(((p - min) / (max - min)) * 100);
    });

    return {
        puntajes_originales: puntajes,
        puntajes_normalizados: normalizados,
        explicacion: `Se aplicó normalización Min-Max sobre el rango [${min}, ${max}].`
    };
}
console.log("Caso Normal:", normalizarPuntajes([20, 50, 80])); 
console.log("Caso Borde (valores iguales):", normalizarPuntajes([75, 75, 75]));
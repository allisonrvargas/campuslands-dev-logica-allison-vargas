function evaluarRendimientoEsports(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return { promedio: 0, mediana: 0, nivel: "inactivo" };
    }

    const sorted = [...puntajes].sort((a, b) => a - b);
    const suma = puntajes.reduce((a, b) => a + b, 0);
    const promedio = suma / puntajes.length;
    
    const mitad = Math.floor(sorted.length / 2);
    const mediana = sorted.length % 2 !== 0 
        ? sorted[mitad] 
        : (sorted[mitad - 1] + sorted[mitad]) / 2;

    let nivel = "";
    if (mediana >= 90) nivel = "profesional";
    else if (mediana >= 70) nivel = "semi-pro";
    else nivel = "amateur";

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        mediana: mediana,
        nivel: nivel
    };
}
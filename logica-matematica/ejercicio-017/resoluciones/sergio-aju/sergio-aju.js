function procesarRankingProyectos(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return { mensaje: "No hay proyectos para evaluar." };
    }
    const suma = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntajes.length;
    const mejor = Math.max(...puntajes);
    const peor = Math.min(...puntajes);
    let estado = "";
    if (promedio >= 85) estado = "Ranking Elite";
    else if (promedio >= 60) estado = "Ranking Estandar";
    else estado = "En Revision";

    return {
        promedio: promedio.toFixed(2),
        mejor_puntaje: mejor,
        peor_puntaje: peor,
        estado: estado,
        explicacion: `Promedio calculado sobre ${puntajes.length} proyectos de arquitectura.`
    };
}
console.log("Caso Normal:", procesarRankingProyectos([80, 95, 70, 88]));
console.log("Caso Borde (Un proyecto):", procesarRankingProyectos([90]));
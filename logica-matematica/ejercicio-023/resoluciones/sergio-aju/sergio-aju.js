function calcularEfectividadEquipo(ganados, empatados, perdidos) {
    const totalPartidos = ganados + empatados + perdidos;


    if (totalPartidos === 0) {
        return { efectividad: "0%", clasificacion: "Sin juegos" };
    }

    const puntosObtenidos = (ganados * 3) + (empatados * 1);
    const puntosPosibles = totalPartidos * 3;
    const porcentajeEfectividad = (puntosObtenidos / puntosPosibles) * 100;

    let clasificacion = "";
    if (porcentajeEfectividad >= 75) clasificacion = "Líder";
    else if (porcentajeEfectividad >= 50) clasificacion = "Competitivo";
    else clasificacion = "En desarrollo";

    return {
        porcentaje_efectividad: `${porcentajeEfectividad.toFixed(2)}%`,
        clasificacion: clasificacion,
        explicacion: `Puntos obtenidos (${puntosObtenidos}) sobre posibles (${puntosPosibles}).`
    };
}
console.log("Caso Normal:", calcularEfectividadEquipo(5, 2, 3)); 
console.log("Caso Borde (0 partidos):", calcularEfectividadEquipo(0, 0, 0));
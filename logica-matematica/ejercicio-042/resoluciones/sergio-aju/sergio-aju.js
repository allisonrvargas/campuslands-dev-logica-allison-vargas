function calcularEfectividad(nombre, puntos, partidos) {
    if (partidos === 0) {
        return { nombre, efectividad: "0%", clasificacion: "En desarrollo" };
    }

    const puntosMaximos = partidos * 3;
    const porcentaje = (puntos / puntosMaximos) * 100;

    let clasificacion = "";
    if (porcentaje >= 80) clasificacion = "Elite";
    else if (porcentaje >= 50) clasificacion = "Competitivo";
    else clasificacion = "En desarrollo";

    return {
        nombre,
        efectividad: `${porcentaje.toFixed(2)}%`,
        clasificacion
    };
}
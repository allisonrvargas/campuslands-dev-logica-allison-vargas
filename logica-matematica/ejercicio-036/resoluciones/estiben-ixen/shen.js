function calcularProyecto(participantes, bono, penalizacion) {
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return "Error: La lista de participantes no es válida.";
    }

    let total = participantes.reduce((acc, val) => acc + val, 0);

    if (participantes.length > 3) {
        total += bono;
    }

    if (Math.max(...participantes) > 25) {
        total -= penalizacion;
    }

    let clasificacion = "";
    if (total > 50) clasificacion = "alto desempeño";
    else if (total >= 20) clasificacion = "competitivo";
    else clasificacion = "en desarrollo";

    return {
        puntaje_final: total,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${total - (participantes.length > 3 ? bono : 0) + (Math.max(...participantes) > 25 ? penalizacion : 0)}. Ajustes aplicados según reglas.`
    };
}

console.log("Caso normal:", calcularProyecto([12, 18, 25, 30], 8, 3));
console.log("Caso borde (pequeño):", calcularProyecto([5, 5], 8, 3));
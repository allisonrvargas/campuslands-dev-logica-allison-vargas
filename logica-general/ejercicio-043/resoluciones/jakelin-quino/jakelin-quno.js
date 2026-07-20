function evaluarClasificacion(victorias, derrotas, tienePenalizacion) {
    if (tienePenalizacion) {
        return { estado: "Descalificado", motivo: "Penalización activa por conducta." };
    }
    if (victorias >= 5) {
        return { estado: "Clasificado", motivo: "Superó el umbral de victorias." };
    }
    if (victorias >= 3 && derrotas < 2) {
        return { estado: "Repechaje", motivo: "Buen desempeño pero requiere fase extra." };
    }
    return { estado: "Eliminado", motivo: "Victorias insuficientes." };
}

console.log(evaluarClasificacion(6, 1, false));
console.log(evaluarClasificacion(2, 0, true));
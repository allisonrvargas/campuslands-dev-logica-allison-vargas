function evaluarEquipo(equipo) {
    const { puntos, diferenciaGoles } = equipo;

    if (puntos > 10) {
        return { estado: "Clasificado", razon: "Clasificación asegurada por puntaje." };
    }

    if (puntos >= 6 && puntos <= 10) {
        return { 
            estado: "Repechaje", 
            razon: diferenciaGoles >= 0 ? "Zona de repechaje, con buena diferencia de goles." : "Zona de repechaje, requiere mejorar diferencia de goles." 
        };
    }

    return { estado: "Eliminado", razon: "Puntaje insuficiente para continuar en el torneo." };
}

const equipoA = { nombre: "CyberKnights", puntos: 8, diferenciaGoles: 2, partidosJugados: 5 };
console.log(evaluarEquipo(equipoA));
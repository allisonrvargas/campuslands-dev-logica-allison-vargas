const evaluarClasificacion = (equipo) => {
    if (equipo.victorias < 2) {
        return { estado: "Eliminado", motivo: "No cumple el requisito mínimo de 2 victorias." };
    }

    const puntaje = (equipo.victorias * 3) + (equipo.empates * 1);
    
    return {
        estado: "Avanza",
        puntajeTotal: puntaje,
        motivo: `Clasificado con ${puntaje} puntos y ${equipo.fairPlayPoints} puntos de fair play.`
    };
};

console.log(evaluarClasificacion({ nombre: "Dragones", victorias: 3, empates: 1, derrotas: 0, fairPlayPoints: 10 }));
console.log(evaluarClasificacion({ nombre: "Noobs", victorias: 1, empates: 5, derrotas: 0, fairPlayPoints: 5 }));
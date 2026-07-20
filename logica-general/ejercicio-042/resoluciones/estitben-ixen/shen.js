function validarPartido(partido) {
    const { golesLocal, golesVisitante, faltasTecnicas, jugado } = partido;

    if (!jugado) {
        return { estado: "rechazado", motivo: "El partido no se ha disputado." };
    }

    if (golesLocal < 0 || golesVisitante < 0) {
        return { estado: "rechazado", motivo: "Marcador con valores negativos no permitido." };
    }

    if (faltasTecnicas > 10) {
        return { estado: "rechazado", motivo: "Partido anulado por exceso de faltas técnicas (Fair Play)." };
    }

    return { estado: "aprobado", motivo: "Datos validados correctamente." };
}

const resultado = { golesLocal: 4, golesVisitante: 4, faltasTecnicas: 2, jugado: true };
console.log(validarPartido(resultado));
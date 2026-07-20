function validarPartido(golesLocal, golesVisitante, faltasLocal, faltasVisitante) {
    if (golesLocal < 0 || golesVisitante < 0 || faltasLocal < 0 || faltasVisitante < 0) {
        return { estado: "Invalido", mensaje: "Los datos no pueden ser negativos" };
    }
    if (faltasLocal > 15 || faltasVisitante > 15) {
        return { estado: "Observacion", mensaje: "Partido con exceso de faltas, requiere revisión arbitral" };
    }
    return { estado: "Valido", mensaje: "Datos procesados correctamente" };
}

console.log(validarPartido(3, 2, 5, 4));
console.log(validarPartido(1, 1, 20, 2));
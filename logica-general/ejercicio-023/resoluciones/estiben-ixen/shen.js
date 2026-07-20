function evaluarEstadoPartida(partida) {
    const { puntuacion, estadoServidor, erroresCriticos } = partida;

    if (estadoServidor !== "activo") {
        return "Partida pausada: verificar infraestructura de red.";
    }

    if (erroresCriticos > 0) {
        return "Partida cancelada: integridad de datos comprometida.";
    }

    if (puntuacion >= 1000) {
        return "Victoria declarada: objetivo alcanzado.";
    }

    return "Partida en curso: continuar monitoreo.";
}

const partidaNormal = { puntuacion: 1200, estadoServidor: "activo", erroresCriticos: 0 };
const partidaError = { puntuacion: 500, estadoServidor: "activo", erroresCriticos: 2 };

console.log(evaluarEstadoPartida(partidaNormal));
console.log(evaluarEstadoPartida(partidaError));
